import React from "react";
import useCustomRouter from "@hooks/useCustomRouter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryFilter = () => {
  const { pushQuery, query } = useCustomRouter();

  return (
    <Select
      value={query.category || ""}
      onValueChange={(value) => pushQuery({ category: value })}
    >
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Job Category" />
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => {
            e.preventDefault();
          };
        }}
      >
        <SelectGroup>
          <SelectItem value="Any">- Any-</SelectItem>
          <SelectItem value="Accounting/Finance">Accounting/Finance</SelectItem>
          <SelectItem value="Casual or Temporary">
            Casual or Temporary
          </SelectItem>
          <SelectItem value="Administrative">Administrative</SelectItem>
          <SelectItem value="Banking/Finance">Banking/Finance</SelectItem>
          <SelectItem value="Tenders">Tenders</SelectItem>
          <SelectItem value="Communications/Public Relations">
            Communications/Public Relations
          </SelectItem>
          <SelectItem value="Hospitality/Chef/Cook">
            Hospitality/Chef/Cook
          </SelectItem>
          <SelectItem value="Computer/IT">Computer/IT</SelectItem>
          <SelectItem value="Construction">Construction</SelectItem>
          <SelectItem value="Consultant/Contractual">
            Consultant/Contractual
          </SelectItem>
          <SelectItem value="Customer Service">Customer Service</SelectItem>
          <SelectItem value="Data, Monitoring, and Research">
            Data, Monitoring, and Research
          </SelectItem>
          <SelectItem value="Design">Design</SelectItem>
          <SelectItem value="Education/Academic/Teaching">
            Education/Academic/Teaching
          </SelectItem>
          <SelectItem value="Engineering">Engineering</SelectItem>
          <SelectItem value="Environment, Forestry and Agriculture">
            Environment, Forestry and Agriculture
          </SelectItem>
          <SelectItem value="Government">Government</SelectItem>
          <SelectItem value="Health/Medicine">Health/Medicine</SelectItem>
          <SelectItem value="Human Resource">Human Resource</SelectItem>
          <SelectItem value="Internships/Trainee">
            Internships/Trainee
          </SelectItem>
          <SelectItem value="Junior Job/Fresh Graduate/Entry Level">
            Junior Job/Fresh Graduate/Entry Level
          </SelectItem>
          <SelectItem value="Legal">Legal</SelectItem>
          <SelectItem value="Logistics/Transportation/Procurement">
            Logistics/Transportation/Procurement
          </SelectItem>
          <SelectItem value="Management">Management</SelectItem>
          <SelectItem value="Marketing">Marketing</SelectItem>
          <SelectItem value="NGO - Non Government Organisations">
            NGO - Non Government Organisations
          </SelectItem>
          <SelectItem value="Part-time/Freelance">
            Part-time/Freelance
          </SelectItem>
          <SelectItem value="Public Relations">Public Relations</SelectItem>
          <SelectItem value="Sales">Sales</SelectItem>
          <SelectItem value="Security, Homeland Security">
            Security, Homeland Security
          </SelectItem>
          <SelectItem value="Several Jobs in one Advert">
            Several Jobs in one Advert
          </SelectItem>
          <SelectItem value="Technician">Technician</SelectItem>
          <SelectItem value="Jobs Abroad">Jobs Abroad</SelectItem>
          <SelectItem value="Casual Workers">Casual Workers</SelectItem>
          <SelectItem value="Auditing">Auditing</SelectItem>
          <SelectItem value="Admin & Office">Admin & Office</SelectItem>
          <SelectItem value="Building & Architecture">
            Building & Architecture
          </SelectItem>
          <SelectItem value="Community & Social Services">
            Community & Social Services
          </SelectItem>
          <SelectItem value="Consulting & Strategy">
            Consulting & Strategy
          </SelectItem>
          <SelectItem value="Creative & Design">Creative & Design</SelectItem>
          <SelectItem value="Customer Service & Support">
            Customer Service & Support
          </SelectItem>
          <SelectItem value="Driver & Transport Services">
            Driver & Transport Services
          </SelectItem>
          <SelectItem value="Engineering & Technology">
            Engineering & Technology
          </SelectItem>
          <SelectItem value="Farming & Agriculture">
            Farming & Agriculture
          </SelectItem>
          <SelectItem value="Health & Safety">Health & Safety</SelectItem>
          <SelectItem value="Hospitality & Leisure">
            Hospitality & Leisure
          </SelectItem>
          <SelectItem value="Human Resources">Human Resources</SelectItem>
          <SelectItem value="Legal Services">Legal Services</SelectItem>
          <SelectItem value="Management & Business Development">
            Management & Business Development
          </SelectItem>
          <SelectItem value="Marketing & Communications">
            Marketing & Communications
          </SelectItem>
          <SelectItem value="Medical & Pharmaceutical">
            Medical & Pharmaceutical
          </SelectItem>
          <SelectItem value="Product & Project Management">
            Product & Project Management
          </SelectItem>
          <SelectItem value="Quality Control & Assurance">
            Quality Control & Assurance
          </SelectItem>
          <SelectItem value="Research, Teaching & Training">
            Research, Teaching & Training
          </SelectItem>
          <SelectItem value="Sales">Sales</SelectItem>
          <SelectItem value="Software & Data">Software & Data</SelectItem>
          <SelectItem value="Supply Chain & Procurement">
            Supply Chain & Procurement
          </SelectItem>
          <SelectItem value="Trades & Services">Trades & Services</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
