import React from "react";

type Project = {
    company: string;
    logo: string;
    members: string[]; 
    budget: string;
    completion: number;
};

const projects: Project[] = [
    {
        company: "Chakra Soft UI Version",
        logo: "/xd.png",
        members: ["A", "B", "C", "D"],
        budget: "$14,000",
        completion: 60,
    },
    {
        company: "Add Progress Track",
        logo: "/progresstrack.png",
        members: ["A"],
        budget: "$3,000",
        completion: 10,
    },
    {
        company: "Fix Platform Errors",
        logo: "/slack.png",
        members: ["A"],
        budget: "Not set",
        completion: 100,
    },
    {
        company: "Launch our Mobile App",
        logo: "/android.png",
        members: ["A", "B", "C", "D"],
        budget: "$32,000",
        completion: 100,
    },
    {
        company: "Add the New Pricing Page",
        logo: "/spotify.png",
        members: ["A", "B", "C", "D"],
        budget: "$400",
        completion: 25,
    },
    {
        company: "Redesign New Online Shop",
        logo: "/figma.png",
        members: ["A"],
        budget: "$7,600",
        completion: 40,
    },
];

const ProjectTable: React.FC = () => {
    return (
        <div className="rounded-2xl p-6 shadow-lg bg-[linear-gradient(126.97deg,_rgba(6,11,40,0.74)_28.26%,_rgba(10,14,35,0.71)_91.2%)]">
            <div className="mb-6 flex justify-between items-center">
                <div >
                    <p className="text-white text-xl font-bold">Projects</p>
                    <p className="text-green-400 text-sm">● 30 done this month</p></div>
                <div></div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400 text-sm">
                            <th className="pb-2 font-normal">COMPANIES</th>
                            <th className="pb-2 font-normal">MEMBERS</th>
                            <th className="pb-2 font-normal">BUDGET</th>
                            <th className="pb-2 font-normal">COMPLETION</th>
                        </tr>
                    </thead>
                    <tbody className="text-white text-sm">
                        {projects.map((proj, index) => (
                            <tr key={index} className="border-t border-[#22304a]">
                                <td className="py-3.5 flex items-center gap-3">
                                    <img src={proj.logo} alt="" className=" rounded" />
                                    <span>{proj.company}</span>
                                </td>
                                <td className="py-3.5">
                                    <div className="flex">
                                        {proj.members.map((member, i) => (
                                            <div
                                                key={i}
                                                className={`w-7 h-7 bg-[#22304a] rounded-full flex items-center justify-center text-white border-2 border-[#0b162b] -ml-3 first:ml-0`}
                                            >
                                                {member}
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td className="py-4">{proj.budget}</td>
                                <td className="py-4">
                                    <div className="flex items-center gap-2">
                                        <span>{proj.completion}%</span>
                                        <div className="w-32 bg-[#22304a] h-2 rounded-full">
                                            <div
                                                className="h-2 bg-[#1583f7] rounded-full"
                                                style={{ width: `${proj.completion}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectTable;
