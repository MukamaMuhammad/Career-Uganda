"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { jobAction } from "@app/actions";
import Editor from "@components/dashboard/Editor";

const page = () => {
  const session = useSession();
  const router = useRouter();

  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // }

  if (session.status === "unauthenticated") {
    router?.push("/");
  }

  return (
    <section className="container mx-auto h-[auto] bg-gray-50 py-[2rem] px-[1rem] md:px-[7rem] z-0">
      <div className=" md:px-20 bg-white p-3 py-10">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-[#4595d0] md:text-2xl mb-2">
          Post a New Job!
        </h1>

        <div className="p-7">
          <form action={jobAction}>
            <div className="mb-6">
              <label htmlFor="jobTitle" className="text-sm">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="companyName" className="text-sm">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="location" className="text-sm">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="applicationLink" className="text-sm">
                Application Link
              </label>
              <input
                type="text"
                id="applicationLink"
                name="applicationLink"
                className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="image" className="text-sm">
                Image Link
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="deadline" className="text-sm">
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
              />
            </div>

            {/* <div className='mb-6'>
              <label htmlFor='category' className='text-sm'>Category</label>
              <select name='category' id='category' className='outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10 bg-white'>
                <option value=''>- Category -</option>
                {
                  categoryData.map(item => (
                    <option key={item._id} value={item._id}>{item.name}</option>
                  ))
                }
              </select>
            </div> */}

            <div className="mb-6">
              <label htmlFor="jobType" className="text-sm">
                Job Type
              </label>
              <select
                name="jobType"
                id="jobType"
                className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10 bg-white"
              >
                <option value="">- Employment Type -</option>
                <option value="Full-time">Full Time</option>
                <option value="Part-time">Part TIme</option>
                <option value="Freelance">Freelance</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="jobCategory" className="text-sm">
                Job Category
              </label>
              <select
                name="jobCategory"
                id="jobCategory"
                className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10 bg-white"
              >
                <option value="">- Job Category -</option>
                <option value="Accounting/Finance">Accounting/Finance</option>
                <option value="Casual or Temporary">Casual or Temporary</option>
                <option value="Administrative">Administrative</option>
                <option value="Banking/Finance">Banking/Finance</option>
                <option value="Tenders">Tenders</option>
                <option value="Communications/Public Relations">
                  Communications/Public Relations
                </option>
                <option value="Hospitality/Chef/Cook">
                  Hospitality/Chef/Cook
                </option>
                <option value="Computer/IT">Computer/IT</option>
                <option value="Construction">Construction</option>
                <option value="Consultant/Contractual">
                  Consultant/Contractual
                </option>
                <option value="Customer Service">Customer Service</option>
                <option value="Data, Monitoring, and Research">
                  Data, Monitoring, and Research
                </option>
                <option value="Design">Design</option>
                <option value="Education/Academic/Teaching">
                  Education/Academic/Teaching
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Environment, Forestry and Agriculture">
                  Environment, Forestry and Agriculture
                </option>
                <option value="Government">Government</option>
                <option value="Health/Medicine">Health/Medicine</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Internships/Trainee">Internships/Trainee</option>
                <option value="Junior Job/Fresh Graduate/Entry Level">
                  Junior Job/Fresh Graduate/Entry Level
                </option>
                <option value="Legal">Legal</option>
                <option value="Logistics/Transportation/Procurement">
                  Logistics/Transportation/Procurement
                </option>
                <option value="Management">Management</option>
                <option value="Marketing">Marketing</option>
                <option value="NGO - Non Government Organisations">
                  NGO - Non Government Organisations
                </option>
                <option value="Part-time/Freelance">Part-time/Freelance</option>
                <option value="Public Relations">Public Relations</option>
                <option value="Sales">Sales</option>
                <option value="Security, Homeland Security">
                  Security, Homeland Security
                </option>
                <option value="Several Jobs in one Advert">
                  Several Jobs in one Advert
                </option>
                <option value="Technician">Technician</option>
                <option value="Jobs Abroad">Jobs Abroad</option>
                <option value="Casual Workers">Casual Workers</option>
                <option value="Auditing">Auditing</option>
                <option value="Admin & Office">Admin & Office</option>
                <option value="Building & Architecture">
                  Building & Architecture
                </option>
                <option value="Community & Social Services">
                  Community & Social Services
                </option>
                <option value="Consulting & Strategy">
                  Consulting & Strategy
                </option>
                <option value="Creative & Design">Creative & Design</option>
                <option value="Customer Service & Support">
                  Customer Service & Support
                </option>
                <option value="Driver & Transport Services">
                  Driver & Transport Services
                </option>
                <option value="Engineering & Technology">
                  Engineering & Technology
                </option>
                <option value="Farming & Agriculture">
                  Farming & Agriculture
                </option>
                <option value="Health & Safety">Health & Safety</option>
                <option value="Hospitality & Leisure">
                  Hospitality & Leisure
                </option>
                <option value="Human Resources">Human Resources</option>
                <option value="Legal Services">Legal Services</option>
                <option value="Management & Business Development">
                  Management & Business Development
                </option>
                <option value="Marketing & Communications">
                  Marketing & Communications
                </option>
                <option value="Medical & Pharmaceutical">
                  Medical & Pharmaceutical
                </option>
                <option value="Product & Project Management">
                  Product & Project Management
                </option>
                <option value="Quality Control & Assurance">
                  Quality Control & Assurance
                </option>
                <option value="Research, Teaching & Training">
                  Research, Teaching & Training
                </option>
                <option value="Sales">Sales</option>
                <option value="Software & Data">Software & Data</option>
                <option value="Supply Chain & Procurement">
                  Supply Chain & Procurement
                </option>
                <option value="Trades & Services">Trades & Services</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="jobDescription" className="text-sm">
                Job Description
              </label>
              <Editor />
            </div>

            <button
              type="submit"
              className="bg-[#4595d0] cursor-pointer transition-[background] text-sm text-white w-full rounded-md py-3"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
