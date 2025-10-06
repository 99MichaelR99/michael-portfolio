export const projects = [
  {
    name: "MR-Finance (In Development)",
    summary:
      "Personal finance dashboards with automated data collection and analysis.",
    stack: ["TypeScript", "Node", "Google Sheets API"],
    link: "https://github.com/your-username/mr-finance",
    demo: "",
    image: "mr-finance.png",
    highlights: [
      "Automated currency conversion and reconciliation checks.",
      "Configurable pipelines; attention to numerical precision.",
    ],
    accent: "#ff003cff",
    where: "Personal Project",
    when: "2025",
  },
  {
    name: "Game Language Library",
    summary:
      "A platform to track and verify video-game language availability and metadata.",
    stack: ["React 19", "JavaScript", "Node/Express", "MongoDB"],
    link: "https://github.com/99MichaelR99/GameLanguageLibrary",
    demo: "https://99michaelr99.github.io/GameLanguageLibrary/#/",
    image: "glv.png",
    highlights: [
      "Reusable components; clean Http service abstraction; strong typing.",
      "End-to-end flow: data ingest, validation, and presentation.",
    ],
    accent: "#3b82f6",
    where: "Personal Project",
    when: "2024",
  },
  {
    name: "VR Unity Scene with Avatars",
    summary:
      "Interactive VR scene in Unity showcasing diverse, generated avatars with locomotion, collision avoidance, event handling, and VR interactions inside a rebuilt Japanese-village environment.",
    stack: ["Unity", "C#", "NavMesh", "VR (XR Input)", "Blender", "Mixamo"],
    link: "https://ranmarashi7.wixsite.com/vr-project",
    demo: "https://www.youtube.com/watch?v=4zsUFjWS_AM",
    image: "vr-avatars.png",
    highlights: [
      "NavMesh pathfinding with obstacle avoidance + event system: avatars gather when one falls from a balcony (trigger + Unity Events).",
      "Avatar pipeline: AvatarCLIP → PLY → FBX with colors (ImageToSTL), baked in Blender and rigged in Mixamo; performance tuned and streamed from PC to headset.",
    ],
    accent: "#f3bb03ff",
    where: "GIP & CGGC Labs — Technion Israel Institute of Technology",
    when: "2023",
  },
  {
    name: "12th-Grade Web Project (ASP.NET)",
    summary:
      "A 2017 high-school web project built in Visual Studio 2015 using ASP.NET (C#) with a Microsoft Access database. HTML handled the UI and SQL powered data operations.",
    stack: ["ASP.NET (C#)", "HTML", "SQL", "Microsoft Access"],
    demo: "https://www.youtube.com/watch?v=4wL2EBMB9UA",
    image: "hs-web-2017.png",
    highlights: [
      "Developed in Visual Studio 2015 with ASP.NET (C#).",
      "Microsoft Access database with SQL-backed CRUD flows.",
    ],
    accent: "#22c55e",
    where: "High School (12th grade)",
    when: "2017",
  },
];
