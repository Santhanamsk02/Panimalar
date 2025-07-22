import React from "react";


const questionBankData = [
  {
    yearSem: "II Yr / III Sem",
    subjects: [
      {
        code: "23CS1302",
        title: "Data Structures",
        link: "https://sites.google.com/view/pec-data-structures/home"
      },
      {
        code: "23CS1303",
        title: "Database Management Systems",
        link: "https://sites.google.com/view/ii-dbms/home"
      },
      {
        code: "23IT1301",
        title: "Object Oriented Programming",
        link: "https://sites.google.com/view/23it1301-oops-material"
      },
      {
        code: "23IT1302",
        title: "Microprocessor and Microcontroller",
        link: "https://sites.google.com/view/21it1402-mpsystems"
      },
      {
        code: "23MA1301",
        title: "Discrete Mathematics",
        link: "https://sites.google.com/view/r2023pecdm/home"
      }
    ]
  },
  {
    yearSem: "III Yr / V Sem",
    subjects: [
      {
        code: "23IT1501",
        title: "Automata Theory and Compiler Engineering",
        link: "https://sites.google.com/view/automata-theory-and-compiler-e/question-bank"
      },
      {
        code: "23IT1502",
        title: "Web Technologies",
        link: "https://sites.google.com/view/iii-year-wt/home/question-bank"
      },
      {
        code: "23IT1503",
        title: "Embedded Systems and Internet of Things",
        link: "https://sites.google.com/view/23it1503-embeddedsystemsandint/home"
      },
      {
        code: "23IT1504",
        title: "Artificial Intelligence",
        link: "https://sites.google.com/view/artificial-intelligence-21it/home"
      },
      {
        code: "23IT1909",
        title: "Ethical Hacking",
        link: "https://sites.google.com/view/ethical-hacking-pec-it/home"
      },
      {
        code: "23GE1004",
        title: "Hospital Waste Management",
        link: "https://sites.google.com/view/23ge1004-hwm/home"
      },
      {
        code: "23EC1011",
        title: "Telehealth Technology",
        link: "https://sites.google.com/view/omd553-tht/question-bank"
      },
      {
        code: "23CS1909",
        title: "Video Creation and Editing",
        link: "https://sites.google.com/view/vce24/home"
      }
    ]
  },
  {
    yearSem: "IV Yr / VII Sem",
    subjects: [
      {
        code: "21IT1701",
        title: "Mobile Computing with mobile application development",
        link: "https://sites.google.com/view/21it1701-mcmad-labintegrated/home"
      },
      {
        code: "21CS1701",
        title: "Cryptography and network Security",
        link: "https://sites.google.com/d/1ehE-i-2oHkgd-lbVJwOkZqgleVaFFOSs/p/1pnqRSu-ABJ-V3eNBTE4iurqXpchJiSqw/edit"
      },
      {
        code: "21MG1701",
        title: "Principles of Management",
        link: "https://sites.google.com/view/ivyrpom?usp=sharing"
      },
      {
        code: "21IT1904",
        title: "Software Testing and Automation",
        link: "https://sites.google.com/view/21it1904-software-testing-and-/home"
      },
      {
        code: "21ME1008",
        title: "Supply Chain Management",
        link: "https://sites.google.com/view/finalyear-scm"
      }
    ]
  }
];

const QuestionBankTable = () => {
  return (
    <div className="container py-5">
      <div className="glass-card shadow-lg p-4 rounded-4">
        <h2 className="text-center fw-bold mb-4 text-primary">📚 Question Bank – Academic Year 2025-26 (Odd Semester)</h2>
        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle modern-table">
            <thead className="table-dark text-center">
              <tr className="fs-5 font">
                <th>YR/SEM</th>
                <th>SUBJECT CODE</th>
                <th>SUBJECT TITLE</th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody>
              {questionBankData.map((group, index) =>
                group.subjects.map((subject, i) => (
                  <tr key={subject.code}>
                    {i === 0 && (
                      <td rowSpan={group.subjects.length} className="fw-bold text-center align-middle bg-light fs-4 font">
                        {group.yearSem}
                      </td>
                    )}
                    <td className="fs-5 fw-normal font">{subject.code}</td>
                    <td className="fs-5 fw-normal font">{subject.title}</td>
                    <td>
                      <a href={subject.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary font">
                        View Link 🔗
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankTable;
