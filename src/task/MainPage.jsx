import React, { useState, useEffect } from "react";
import FirstPopupForm from "./FirstPopupForm";
import SecondPopupForm from "./SecondPopupForm";
import { fetchData, postData, updateData, deleteData } from "./constants/api";
import EditIcon from "./icons/EditIcon";
import TrashIcon from "./icons/TrashIcon";
const MainPage = () => {
  const [showCreateJobForm, setShowCreateJobForm] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstPopupData: null,
    secondPopupData: null,
  });

  const [allData, setallData] = useState([]);

  const handleCreateJobClick = () => {
    setShowCreateJobForm(true);
  };

  const handleFirstFormSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      firstPopupData: data,
    }));
    setShowCreateJobForm(false);
    setShowSecondPopup(true);
  };

  const getData = async () => {
    try {
      const data = await fetchData();
      setallData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSecondFormSubmit = async (data) => {
    setFormData((prevData) => ({
      ...prevData,
      secondPopupData: data,
    }));
    setShowSecondPopup(false);

    // Combine data from both forms into the desired format
    const combinedData = {
      jobTitle: formData.firstPopupData.jobTitle,
      companyName: formData.firstPopupData.companyName,
      industry: formData.firstPopupData.industry,
      location: formData.firstPopupData.location,
      remoteType: formData.firstPopupData.remoteType,
      // sec form data
      expMinimum: data.expMinimum,
      expMaximum: data.expMaximum,
      salaryMinimum: data.salaryMinimum,
      salaryMaximum: data.salaryMaximum,
      totalEmp: data.totalEmp,
      applyType: data.applyType,
    };

    try {
      if (formData.editableId) {
        await updateData(formData.editableId, combinedData);
      } else {
        await postData(combinedData);
      }

      getData();
    } catch (error) {
      console.error("Error handling second form submission:", error);
    }
  };

  // ************** handleEditClick

  const handleEditClick = (selectedData, ID) => {
    //  FirstPopupForm with selected values
    setShowCreateJobForm(true);
    setFormData({
      firstPopupData: {
        jobTitle: selectedData?.jobTitle,
        companyName: selectedData?.companyName,
        industry: selectedData?.industry,
        location: selectedData?.location,
        remoteType: selectedData?.remoteType,
      },
      //  secondPopupForm with selected values
      secondPopupData: {
        expMinimum: selectedData?.expMinimum,
        expMaximum: selectedData?.expMaximum,
        salaryMinimum: selectedData?.salaryMinimum,
        salaryMaximum: selectedData?.salaryMaximum,
        totalEmp: selectedData?.totalEmp,
        applyType: selectedData?.applyType,
      },
      editableId: selectedData.id,
    });
  };

  //   ************  delete
  const handleDeleteClick = async (id) => {
    try {
      await deleteData(id);
      getData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="controls">
        <div className="container mx-auto p-4">
          <button
            className="main-btn spacing fixed top-1 left-1"
            onClick={handleCreateJobClick}
          >
            Create Job
          </button>

          {showCreateJobForm && (
            <FirstPopupForm
              initialData={formData.firstPopupData}
              onSubmit={handleFirstFormSubmit}
            />
          )}

          {showSecondPopup && (
            <SecondPopupForm
              initialData={formData.secondPopupData}
              onSubmit={handleSecondFormSubmit}
            />
          )}

          <div className="main-col">
            {allData.map((item, i) => (
              <div className="main-card">
                <div className="flex justify-between">
                  <div className="content">
                    <div>
                      <img
                        src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
                        className="w-9 rounded"
                        alt=""
                      />
                    </div>
                    <div className="leading-normal">
                      <p className="text-2xl font-medium">{item?.jobTitle}</p>
                      <p className="t-base font-medium ">
                        {item?.companyName} - {item?.industry}
                      </p>
                      <p className="spacing t-base text-gray-400">
                        {item?.location} - {item?.remoteType}
                      </p>
                      <p className="t-base">
                        Experience ({item?.expMinimum} - {item?.expMaximum} )
                      </p>
                      <p className="t-base">
                        INR ({item?.salaryMinimum} - {item?.salaryMaximum})
                      </p>
                      <p className="t-base">{item?.totalEmp} Employees</p>

                      <div className="content mt-4">
                        <button type="submit" className="main-btn  py-2">
                          {item?.applyType}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <span onClick={() => handleEditClick(item, i)}>
                      <EditIcon />
                    </span>
                    <span onClick={() => handleDeleteClick(item.id)}>
                      <TrashIcon />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
