import React from "react";
import { Section } from "../../Styles/global";
import optimize from "../../images/optimize.jpg";

export default function Offers() {
  return (
    <Section>
      <div className="Insights">
        <div
          className="Insightsco p-5"
          style={{ backgroundImage: `url(${optimize})` }}
        >
          <div className=" Insightsintro container text-center text-light">
            <h5 className=" Insightstitle gradient__bg onside">Insights!!!</h5>
            <h6 className="Insightssub  mb-5">
              Published insights from our multi-method, rigorous research on
              positive youth development. Creative Power Organisation research
              findings and insights have been used the world over to strengthen
              the developmental relationships that help young people learn,
              grow, and thrive. Our most powerful learning occurs at the nexus
              of theory, research, and practice. 
              We are driven by curiosity
              about what young people need to succeed — and how they contribute
              to their communities and the world. We are continually discovering
              new ways to shape and deepen developmental relationships by
              working in partnerships with youth-serving organizations. Creative
              Power Organisation research is anchored in positive youth
              development approaches and is impacting several disciplines,
              including child development, family systems, prevention science,
              social learning, social capital, and community development.We use
              multiple methods and rigorous approaches in our research design,
              to understand and promote positive youth development at the
              intersection of foundational relationships and equity
            </h6>
          </div>
        </div>
      </div>
      <div className="gradient__bk">
        <h4 className="Insightsintro container text-center">
          Youth Development Research and Insights
        </h4>
        <h5>
          Our applied youth development research includes studies that seek to
          understand the contexts and conditions that affect:
        </h5>
        <h5>
          <ul>
            <li>Developmental relationships</li>
            <li>Student motivation and achievement</li>
            <li>Developmental Assets</li>
            <li>Prevention</li>
            <li>Civic development and service learning</li>
            <li>Sparks and thriving</li>
            <li>Spiritual development</li>
            <li>Faith communities</li>
          </ul>
        </h5>
        <a
          href="https://ourworldindata.org/covid-vaccinations?country=OWID_WRL"
          style={{ textDecoration: "none" }}
        >
          Learn More &nbsp; &rarr;
        </a>
      </div>
    </Section>
  );
}
