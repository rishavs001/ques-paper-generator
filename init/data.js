const sampleListings = [
  {
    "id": "9ec808d1-d59c-4346-8fa9-5694bf6e7254",
    "question": "Explain the concept of quantum superposition in quantum mechanics.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "587c6dde-9a49-4c16-892e-6a030c080a90",
    "question": "Discuss the concept of time crystals in the context of condensed matter physics.",
    "subject": "Physics",
    "topic": "Condensed Matter Physics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "9ea2fba4-ded1-48a9-8e90-31e481c6a874",
    "question": "Define the term 'spin' in the context of quantum mechanics.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "18ac852a-1ef3-4f5b-9079-cd4535dbad11",
    "question": "Explain the concept of wave function collapse in quantum mechanics.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "6649456f-8e8f-4ab7-bda9-7b6956214feb",
    "question": "Discuss the principles behind the operation of a cyclotron.",
    "subject": "Physics",
    "topic": "Particle Accelerators",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "1942ddd9-29cd-45ba-8c4c-bebabf24005f",
    "question": "Define the term 'quantum dot' and its applications in nanotechnology.",
    "subject": "Physics",
    "topic": "Nanotechnology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "54da0dcc-96b9-4a81-93b6-f7a3f84d0d7a",
    "question": "Explain the concept of chaos theory in classical mechanics.",
    "subject": "Physics",
    "topic": "Classical Mechanics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "6d888cf1-cb7e-4e9c-aeda-07855ad1face",
    "question": "Discuss the principles behind the operation of a photoelectric cell.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "feff7d79-891a-4e2f-b7ba-8c1ebc8051c6",
    "question": "Define the term 'neutrino' and discuss its properties.",
    "subject": "Physics",
    "topic": "Particle Physics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "e0066755-0811-4348-8803-2906e0ac2a56",
    "question": "Explain the concept of quantum computing and its potential advantages over classical computing.",
    "subject": "Physics",
    "topic": "Quantum Computing",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "d997a590-6a5c-421c-a9a1-543c7368d511",
    "question": "Discuss the principles behind the operation of a cloud chamber in particle physics.",
    "subject": "Physics",
    "topic": "Particle Physics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "b048a330-8347-44cd-a80e-0d7e0664a562",
    "question": "Define the term 'antimatter' and its role in the universe.",
    "subject": "Physics",
    "topic": "Cosmology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "90911ee4-7409-48eb-a764-e33b80af3eb3",
    "question": "Explain the concept of tunnel diode and its applications in electronics.",
    "subject": "Physics",
    "topic": "Electronics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "cc05a1e3-1cf0-43f2-a810-026797da8085",
    "question": "Discuss the principles behind the operation of a quantum key distribution system.",
    "subject": "Physics",
    "topic": "Quantum Communication",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "9f0eeffe-cc65-4edd-9ea6-afc31b4235fb",
    "question": "Define the term 'brane' in the context of string theory.",
    "subject": "Physics",
    "topic": "String Theory",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "ee7e520c-8a08-4805-9224-e3ab650647df",
    "question": "Explain the concept of spintronics and its applications in technology.",
    "subject": "Physics",
    "topic": "Spintronics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "e7af93f9-689f-4048-8a32-2cacde82d00f",
    "question": "Discuss the principles behind the operation of a calorimeter in experimental physics.",
    "subject": "Physics",
    "topic": "Experimental Techniques",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "a85d65ed-727a-4659-ae2a-bce77008e983",
    "question": "Define the term 'quantum entanglement' and its implications for information theory.",
    "subject": "Physics",
    "topic": "Quantum Information",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "fc26fb6f-a987-477f-8412-4192c4249523",
    "question": "Explain the concept of Bose-Einstein condensation and its significance in quantum mechanics.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "bb590280-4bdd-4d7f-955b-fe818a16991e",
    "question": "Explain the concept of photoelectric effect and its implications for quantum theory.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "8fa240d6-72db-441c-8d2f-b1189c1fb636",
    "question": "Discuss the principles behind the operation of a cyclotron and its role in particle acceleration.",
    "subject": "Physics",
    "topic": "Particle Accelerators",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "75183c84-c25b-464c-aff8-e4dba83b102e",
    "question": "Explain the working principle of a thermoelectric generator and its applications.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "ffc48fc3-72ba-45f7-8378-939e558aef51",
    "question": "Discuss the concept of spontaneous symmetry breaking in the context of phase transitions.",
    "subject": "Physics",
    "topic": "Condensed Matter Physics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "f4ad54bf-e59b-49fa-b4e0-e2957620f490",
    "question": "Derive the expression for the Lorentz force in electromagnetic theory.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "1a3db728-fe52-4547-b82a-7abf835d5811",
    "question": "Explain the concept of Bose-Einstein condensation and its significance in quantum mechanics.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "40aaf893-170b-46e5-ac3d-10674a38474a",
    "question": "Discuss the principles behind the operation of a magnetic resonance imaging (MRI) machine.",
    "subject": "Physics",
    "topic": "Medical Physics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "0e1d792a-f54b-4141-a8ce-238717a979cc",
    "question": "Explain the phenomenon of quantum teleportation and its potential applications.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "2d8862e2-da3f-4778-9cbf-a2fe10ac9acf",
    "question": "Discuss the principles behind the operation of a cathode-ray tube (CRT) in old television sets.",
    "subject": "Physics",
    "topic": "Electronics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "35eecbc1-be93-4196-b062-4e9c7b6bd6d1",
    "question": "Explain the concept of spontaneous parametric down-conversion in quantum optics.",
    "subject": "Physics",
    "topic": "Quantum Optics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "515a37b6-28a6-4e6e-b07a-95c2a656d2b5",
    "question": "Derive the expression for the diffraction pattern produced by a single slit.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "f5601f7c-dbc8-446e-b586-24c4ece38b1b",
    "question": "Discuss the principles behind the operation of a positron emission tomography (PET) scanner.",
    "subject": "Physics",
    "topic": "Medical Physics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "fd3af8fb-f452-4815-b5c8-77c3a665e560",
    "question": "Explain the concept of quantum computing and its potential advantages over classical computing.",
    "subject": "Physics",
    "topic": "Quantum Computing",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "f8f467ef-765b-4d26-925a-7ec053fb4fae",
    "question": "Discuss the principles behind the operation of a magnetic levitation (maglev) train.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "d25de750-28d6-4489-8a27-767e4311344f",
    "question": "Explain the concept of Raman scattering and its applications in spectroscopy.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "7c8e2aac-5f21-487d-b3c9-844dfc437972",
    "question": "Discuss the principles behind the operation of a scanning electron microscope (SEM).",
    "subject": "Physics",
    "topic": "Microscopy",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "0f36349f-f983-43e9-942e-dc6b6e39a3f9",
    "question": "Explain the working principle of a nuclear magnetic resonance (NMR) spectrometer.",
    "subject": "Physics",
    "topic": "Spectroscopy",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "ef56e2ff-c4f3-4605-828e-3407a0970fab",
    "question": "Discuss the concept of quantum Hall effect and its significance in condensed matter physics.",
    "subject": "Physics",
    "topic": "Condensed Matter Physics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "a7c107be-9ccd-4c41-aa49-432f0e6d941a",
    "question": "Derive the expression for the energy of a photon using Planck's quantum theory.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "97a79da1-09f5-499e-8309-3159393a8d7d",
    "question": "Discuss the principles behind the operation of a tokamak in controlled nuclear fusion research.",
    "subject": "Physics",
    "topic": "Nuclear Fusion",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "778a0e91-d72e-4316-a7fd-c86ea75811f6",
    "question": "Explain the concept of wave-particle duality and provide examples.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "3fddd705-1baa-4bdb-a35d-ed1660c96dc2",
    "question": "Discuss the principles of operation and applications of a cyclotron.",
    "subject": "Physics",
    "topic": "Particle Physics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "5c524ae0-a297-45dd-a5c8-817e99706c20",
    "question": "Derive the expression for the Lorentz force in the context of electromagnetic interactions.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "212a1774-b8c3-40ec-bc0d-97aec7b44f8f",
    "question": "Explain the concept of the photoelectric effect and its importance in quantum theory.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "4363a77e-0b03-4683-9f59-8389de45c562",
    "question": "Discuss the principles behind the operation of a mass spectrometer and its applications.",
    "subject": "Physics",
    "topic": "Particle Physics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "0b7803d3-0585-41aa-899d-970bd6656115",
    "question": "Derive the expression for the energy stored in a capacitor.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "7734c455-9ce9-4ac3-94be-f26da73e244e",
    "question": "Explain the concept of Bose-Einstein condensation and its significance in quantum physics.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "a08aa25a-0581-474b-98ec-7341e6e29698",
    "question": "Discuss the principles of operation and applications of a scanning electron microscope (SEM).",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "46f264e5-ba37-4f4a-9666-f92a2930a6f8",
    "question": "Derive the expression for the power in an AC circuit.",
    "subject": "Physics",
    "topic": "Electricity and Magnetism",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "81ddd93d-7ca6-4a5f-86bf-1dedea25e609",
    "question": "Explain the concept of spontaneous symmetry breaking in particle physics.",
    "subject": "Physics",
    "topic": "Particle Physics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "82498dd0-c601-4e3c-8d33-3f66767671da",
    "question": "Discuss the principles behind the operation of a nuclear magnetic resonance (NMR) spectrometer.",
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "0f773ebf-f2fb-4644-b0a3-71cb08499d30",
    "question": "Derive the expression for the energy levels of a particle in a one-dimensional box.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "f7246793-a136-413c-8ee8-f69697b80fc3",
    "question": "Explain the concept of CP violation in particle physics and its implications.",
    "subject": "Physics",
    "topic": "Particle Physics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "aaf64bc1-e68a-4b4b-83a3-e4616f0f2a2d",
    "question": "Discuss the principles of operation and applications of a magnetic resonance imaging (MRI) machine.",
    "subject": "Physics",
    "topic": "Medical Physics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "b2722469-2009-4ec6-bebd-9df08ed80696",
    "question": "Derive the expression for the force between two point charges in electrostatics.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "9a3b3322-4c53-4d7f-a9c4-3709ff1887ae",
    "question": "Explain the concept of spontaneous parametric down-conversion in quantum optics.",
    "subject": "Physics",
    "topic": "Quantum Optics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "28087589-b85b-4071-8ad5-ac4b8a001caf",
    "question": "Discuss the principles behind the operation of a particle detector in high-energy physics experiments.",
    "subject": "Physics",
    "topic": "Particle Physics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "a8228ce5-abe9-405f-b478-2041375c621e",
    "question": "Derive the expression for the efficiency of a Carnot heat engine.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "d46e2f2d-0c87-452e-bfb7-0c42df11481b",
    "question": "Explain the concept of gauge invariance in the context of electromagnetic interactions.",
    "subject": "Physics",
    "topic": "Quantum Field Theory",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "c49e9ba3-0a07-4eaa-b734-446ed55d3624",
    "question": "Discuss the principles of operation and applications of a magneto-optical trap (MOT) in atomic physics.",
    "subject": "Physics",
    "topic": "Atomic Physics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "a5307014-e772-4da6-87b4-3f88e640cb7b",
    "question": "Explain the concept of wave interference and provide examples.",
    "subject": "Physics",
    "topic": "Waves",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "a268beb3-7866-48df-a352-2b6d9afafb9f",
    "question": "Discuss the applications and limitations of Kirchhoff's laws in electrical circuits.",
    "subject": "Physics",
    "topic": "Electric Circuits",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "75f56def-943e-42e8-8d42-e45ff84edb4c",
    "question": "Derive the expression for the critical angle in optics and explain its significance.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "b0079ef1-3508-48c3-b88c-00119d946940",
    "question": "Explain the principles of operation of a Carnot heat engine and its efficiency.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "9fe9b22c-9202-4165-8642-99d1d8bf5702",
    "question": "Discuss the concept of electric polarization in dielectric materials.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "5b44db94-310f-460f-8fb3-443eb87768f8",
    "question": "Derive the equation for the force experienced by a charged particle moving in a magnetic field.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "d1fdde81-41ff-45f3-9fba-684ed6491ea5",
    "question": "Explain the principles behind the operation of a Michelson interferometer and its applications.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "5879ba79-292d-4903-b81c-1189d87848ea",
    "question": "Discuss the principles of operation of a cyclotron and its role in particle acceleration.",
    "subject": "Physics",
    "topic": "Particle Accelerators",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "269c4d9d-487b-4a64-90be-148bcc961c87",
    "question": "Explain the concept of angular momentum conservation in rotational motion.",
    "subject": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "c9df73bf-219f-4e15-80d6-d1986a10f0c0",
    "question": "Discuss the principles behind the operation of a Peltier cooler and its applications.",
    "subject": "Physics",
    "topic": "Thermoelectricity",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "dbf94ff8-7c5f-4bbc-8a63-ae8e26fa5f3f",
    "question": "Derive the expression for the capacitance of a parallel plate capacitor.",
    "subject": "Physics",
    "topic": "Capacitance",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "d60ef763-0ae2-4fab-9d12-9638ff27f6fb",
    "question": "Explain the concept of fluid viscosity and its effects on fluid flow.",
    "subject": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "d7db0047-585d-42e7-b6f2-13ffae7b2226",
    "question": "Discuss the principles of operation of a Geiger-Muller counter and its applications in radiation detection.",
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "4ba44dd3-ac33-4e2a-badf-5c15d678f502",
    "question": "Explain the phenomenon of diffraction and its importance in wave optics.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "4f6a112e-9952-4739-a347-8d99cebc0d27",
    "question": "Discuss the principles behind the operation of a Faraday cage and its applications in electromagnetic shielding.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "df8c89d3-8fd5-47bb-bdc1-1439c0954a9b",
    "question": "Derive the equations of motion for a simple harmonic oscillator.",
    "subject": "Physics",
    "topic": "Harmonic Motion",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "ebc0412f-4151-480e-adb4-355974ceb603",
    "question": "Explain the principles of operation of a nuclear magnetic resonance (NMR) spectrometer and its applications.",
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "1ae28820-1dab-4ff0-ad53-163f5247df9c",
    "question": "Discuss the principles behind the operation of a Hall effect sensor and its applications in measuring magnetic fields.",
    "subject": "Physics",
    "topic": "Magnetism",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "5b3ba42a-a5ce-4340-a962-71b2bed6b3f9",
    "question": "Explain the concept of wave packets in quantum mechanics and their relevance.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "8f8ac620-052b-4f60-9621-38355b29cc5a",
    "question": "Discuss the principles of operation of a gas chromatograph and its applications in analytical chemistry.",
    "subject": "Physics",
    "topic": "Analytical Instruments",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of wave interference and provide an example.",
    "subject": "Physics",
    "topic": "Waves",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Derive the expression for the kinetic energy of a rotating rigid body.",
    "subject": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principle of conservation of angular momentum and provide examples.",
    "subject": "Physics",
    "topic": "Angular Momentum",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Explain the phenomenon of total internal reflection in optics.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the concept of electric potential and its relation to electric field strength.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Derive the expression for the work done by a variable force along a straight path.",
    "subject": "Physics",
    "topic": "Work and Energy",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of elastic and inelastic collisions with relevant equations.",
    "subject": "Physics",
    "topic": "Collisions",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a simple harmonic oscillator.",
    "subject": "Physics",
    "topic": "Harmonic Motion",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of diffraction and provide examples in everyday life.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the laws of thermodynamics and their applications.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Derive the equation for the velocity of sound in a medium.",
    "subject": "Physics",
    "topic": "Waves",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of capacitance and its role in electrical circuits.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles of operation of a cathode-ray oscilloscope (CRO).",
    "subject": "Physics",
    "topic": "Electronics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Derive the formula for the focal length of a lens in terms of lens power.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of magnetic flux and Faraday's law of electromagnetic induction.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles of operation of a photoelectric cell and its applications.",
    "subject": "Physics",
    "topic": "Modern Physics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Derive the expression for the electric field due to a point charge.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of nuclear fission and its use in power generation.",
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a transformer.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Derive the equation for the critical angle in optics and explain its significance.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Define angular momentum and its conservation in isolated systems.",
    "subject": "Physics",
    "topic": "Classical Mechanics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of electric potential energy and its relationship to electric potential.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the phenomenon of total internal reflection in optics.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Explain the working principle of a cathode-ray oscilloscope (CRO).",
    "subject": "Physics",
    "topic": "Electronics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Define the term 'escape velocity' and its significance in astrophysics.",
    "subject": "Physics",
    "topic": "Astrophysics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the concept of mechanical impedance in the context of wave propagation.",
    "subject": "Physics",
    "topic": "Waves",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of wave interference and provide examples.",
    "subject": "Physics",
    "topic": "Waves",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Define the term 'critical angle' in the context of optics.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a transformer.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of drift velocity in electrical conduction.",
    "subject": "Physics",
    "topic": "Electronics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Define the term 'resistivity' and explain its dependence on temperature.",
    "subject": "Physics",
    "topic": "Electronics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a cyclotron.",
    "subject": "Physics",
    "topic": "Particle Accelerators",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of gravitational potential energy and its relationship to gravitational potential.",
    "subject": "Physics",
    "topic": "Gravity",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the applications of semiconductors in electronic devices.",
    "subject": "Physics",
    "topic": "Electronics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Define the term 'work function' in the context of photoelectric effect.",
    "subject": "Physics",
    "topic": "Modern Physics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of wave packet in quantum mechanics.",
    "subject": "Physics",
    "topic": "Quantum Mechanics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a Geiger-Muller counter.",
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Define the term 'specific heat capacity' and explain its significance.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the concept of polarization in the context of light waves.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "56057aec-3d94-41ff-b5f2-17c48e244624",
    "question": "What is the SI unit of measurement for electric current?",
    "subject": "Physics",
    "topic": "Electricity",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "c209e207-9be9-4809-a21c-0c5e17f233df",
    "question": "Define the term 'kinetic energy' and provide its mathematical expression.",
    "subject": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "6bafff11-2c71-4172-841d-963da9a1c69e",
    "question": "Explain the concept of buoyancy in fluids.",
    "subject": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "0820233c-ff92-49e4-a8af-669572aaf7e8",
    "question": "What is the law of reflection in optics?",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "ad572f22-3600-4cba-b40b-baa1267fdd65",
    "question": "State the first law of thermodynamics.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "e42ac77d-4a54-4d12-99c8-f3834cc5db20",
    "question": "Define the term 'momentum' and provide its formula.",
    "subject": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "e5f84c4c-60c5-4756-9cfc-f043285ee579",
    "question": "What is the SI unit of measurement for force?",
    "subject": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "e70d69ff-ad98-43d5-a7af-217504c51238",
    "question": "Explain the phenomenon of total internal reflection in optics.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "81e8f036-7cca-4905-ad51-227e46f1d2cf",
    "question": "Define the term 'resistance' in the context of electric circuits.",
    "subject": "Physics",
    "topic": "Electricity",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "fae28e49-de95-4958-8d8f-ba4754bd3543",
    "question": "State Ohm's Law and provide its mathematical expression.",
    "subject": "Physics",
    "topic": "Electricity",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "a31c8ef3-5c59-482f-a682-48666fb6d5f0",
    "question": "Explain the concept of simple harmonic motion.",
    "subject": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "3702fcd4-d1d9-4da6-a449-53ebaac7da5b",
    "question": "What is the SI unit of measurement for temperature?",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "949849e9-35ef-49ec-83c6-6a3d3fc49498",
    "question": "Define the term 'work' in physics.",
    "subject": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "1507b681-6439-4cfc-941b-88f2030f316d",
    "question": "Explain the concept of static electricity.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "e2d7e100-dc23-4ffc-90b4-7b98272d58da",
    "question": "State Kepler's laws of planetary motion.",
    "subject": "Physics",
    "topic": "Astrophysics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "03b713be-1be5-462b-a39e-e7bc436cc387",
    "question": "Define the term 'frequency' in the context of waves.",
    "subject": "Physics",
    "topic": "Waves",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "33280427-d117-4cf8-9353-e8d071089e22",
    "question": "Explain the concept of elastic collisions.",
    "subject": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "881124b6-4e34-40dc-87d8-0c8dcd0ac84e",
    "question": "What is the SI unit of measurement for power?",
    "subject": "Physics",
    "topic": "Energy",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "811c2b2d-6e54-4951-8048-5f219c26c884",
    "question": "Define the term 'centripetal force' and provide an example.",
    "subject": "Physics",
    "topic": "Mechanics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "cd00b430-d308-401b-9241-235cd9e1eaa7",
    "question": "Explain the concept of magnetic induction.",
    "subject": "Physics",
    "topic": "Magnetism",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "6c5b99f3-1262-4604-a392-020e8b24d36c",
    "question": "Explain the difference between speed and velocity.",
    "subject": "Physics",
    "topic": "Kinematics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "c9042b23-90ff-4db5-9163-edc22ad3ea07",
    "question": "Discuss the laws of reflection and refraction of light.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "fdc45c5e-d355-4d27-b405-09d114269b99",
    "question": "Explain the conservation of linear momentum with an example.",
    "subject": "Physics",
    "topic": "Momentum",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "5e084153-f711-44ea-b829-95f4ae407d4e",
    "question": "Discuss the principle of conservation of energy in a closed system.",
    "subject": "Physics",
    "topic": "Energy",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "b6a5f858-364f-445f-8475-4c46ceb665fe",
    "question": "Explain how Pascal's Law is applied in hydraulic systems.",
    "subject": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "6103d72b-5042-4b46-bfbf-e0320ea583af",
    "question": "Discuss the principles behind the operation of a simple DC motor.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "17f92d03-2b5c-4bf2-a404-994fd9e4695e",
    "question": "Explain the working of a simple pendulum and how its period depends on different factors.",
    "subject": "Physics",
    "topic": "Simple Harmonic Motion",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "608f6115-c324-47a7-b686-df9ac2a210c5",
    "question": "Discuss the concept of capacitance in an electrical circuit.",
    "subject": "Physics",
    "topic": "Electricity",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "69e2f55b-f7df-4155-b585-b221769d9144",
    "question": "Explain the difference between conduction, convection, and radiation as methods of heat transfer.",
    "subject": "Physics",
    "topic": "Heat Transfer",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "9fa76d11-a9df-46fd-8b20-355d5179e968",
    "question": "Discuss the principles behind the operation of a simple AC generator.",
    "subject": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "da1fb259-9027-42dc-ba31-528d7cd251a7",
    "question": "Explain the concept of buoyancy and Archimedes' principle.",
    "subject": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "121d5a96-e444-446a-aa60-971e63cfa138",
    "question": "Discuss the applications of total internal reflection in optical fibers.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "8256eb73-1acd-4a0a-8786-85375057fc37",
    "question": "Explain the working of a transformer and its role in electrical power distribution.",
    "subject": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "a44aca23-f3bf-4cea-af32-4a96988ffc8b",
    "question": "Discuss the concept of half-life in radioactive decay.",
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "4444f7bf-ce9c-4315-9e9a-132ec1d55b1e",
    "question": "Explain the principles behind the operation of a simple microscope.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "7d34dd02-60af-4ddf-a54a-08c6891a03d5",
    "question": "Discuss the principles behind the operation of a cathode-ray oscilloscope (CRO).",
    "subject": "Physics",
    "topic": "Electronics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "e0e9c3a9-3fb6-416f-ab9e-3d89318f360f",
    "question": "Explain the laws of thermodynamics and their significance in understanding energy transfer.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "5f5360ab-f1ab-4d0f-b929-799078f328e6",
    "question": "Discuss the principles behind the operation of a photoelectric cell.",
    "subject": "Physics",
    "topic": "Modern Physics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "9d64b679-f0de-46d4-aad1-bf587dc39104",
    "question": "Explain the concept of angular momentum and its conservation in rotational motion.",
    "subject": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "1b5f2c38-3307-4102-b2fd-68eb1fd7dfbb",
    "question": "Discuss the principles behind the operation of a Geiger-Muller counter.",
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of buoyancy in fluids and how it relates to Archimedes' principle.",
    "subject": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the three laws of motion formulated by Sir Isaac Newton and provide examples for each.",
    "subject": "Physics",
    "topic": "Classical Mechanics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of electric potential energy and how it is related to electric potential.",
    "subject": "Physics",
    "topic": "Electrostatics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a simple DC motor and its applications.",
    "subject": "Physics",
    "topic": "Electricity and Magnetism",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the laws of thermodynamics and their significance in the study of heat and energy transfer.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Describe the concept of simple harmonic motion and provide examples from everyday life.",
    "subject": "Physics",
    "topic": "Harmonic Motion",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a telescope and its role in astronomy.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of work done in physics and its relationship with energy.",
    "subject": "Physics",
    "topic": "Energy and Work",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the phenomenon of total internal reflection and its applications in optics.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of photoelectric effect and its implications for the understanding of light.",
    "subject": "Physics",
    "topic": "Quantum Physics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Describe the principles behind the operation of a nuclear reactor and its safety features.",
    "subject": "Physics",
    "topic": "Nuclear Physics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles of electromagnetic induction and its applications in everyday devices.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of wave interference and provide examples from different wave types.",
    "subject": "Physics",
    "topic": "Waves",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a gas laser and compare it with other types of lasers.",
    "subject": "Physics",
    "topic": "Optics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of elastic collisions in classical mechanics and provide relevant equations.",
    "subject": "Physics",
    "topic": "Classical Mechanics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a magnetic resonance imaging (MRI) machine.",
    "subject": "Physics",
    "topic": "Medical Physics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of electric polarization in dielectric materials and its role in capacitors.",
    "subject": "Physics",
    "topic": "Electricity and Magnetism",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Discuss the principles behind the operation of a cyclotron and its applications in particle physics.",
    "subject": "Physics",
    "topic": "Particle Physics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Explain the concept of entropy and its role in the second law of thermodynamics.",
    "subject": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "uuidv4()",
    "question": "Describe the principles behind the operation of a superheterodyne radio receiver.",
    "subject": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "9427a6de-3323-4794-98e4-830fc6b1a8a3",
    "question": "Explain the process of photosynthesis and its importance in the ecosystem.",
    "subject": "Biology",
    "topic": "Photosynthesis",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "063d5ab7-3f5b-4a05-8774-7569bbc2e215",
    "question": "Describe the structure and function of DNA.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "d98d9c91-39df-476f-aede-d0cfab733379",
    "question": "Explain the stages of the cell cycle and their significance in cell division.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "25a3767a-ec7f-4379-b1d6-d5a1fe01b571",
    "question": "Discuss the role of enzymes in biological reactions, providing examples.",
    "subject": "Biology",
    "topic": "Enzymes",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "5ac48990-27a8-425a-a131-f6ad860d7e7f",
    "question": "Explain the principles of Darwinian evolution and provide evidence supporting this theory.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "923892d6-d757-4f04-8d60-219cd5ecca6c",
    "question": "Describe the structure and function of mitochondria in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "cb3a1010-d7f0-4c6c-a639-1c0ba1ec1c25",
    "question": "Explain the concept of homeostasis and provide examples of its regulation in the human body.",
    "subject": "Biology",
    "topic": "Homeostasis",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "9539e23c-2861-44f6-89dd-aa1ec302583d",
    "question": "Discuss the importance of biodiversity and its impact on ecosystems.",
    "subject": "Biology",
    "topic": "Biodiversity",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "1490585e-ee58-41d7-8d8a-8822e803b9a0",
    "question": "Explain the process of transcription and translation in protein synthesis.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "bbc49396-c827-419c-8ea8-2e4391864716",
    "question": "Discuss the functions of the different types of blood cells in the circulatory system.",
    "subject": "Biology",
    "topic": "Human Anatomy",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "96ff5788-e9fb-4f68-ba5f-d0ca5639cb36",
    "question": "Explain the principles of Mendelian inheritance and provide examples.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "40aff916-4fd7-4f6c-afe8-077cb199e2a2",
    "question": "Describe the structure and function of the chloroplast in plant cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "a6d3ceda-a4ea-4a6d-848a-0766b4c9c150",
    "question": "Discuss the role of hormones in the endocrine system and their impact on physiological processes.",
    "subject": "Biology",
    "topic": "Endocrine System",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "9ff94feb-8a24-475e-bfab-e447be79653c",
    "question": "Explain the process of meiosis and its significance in sexual reproduction.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "eeff7e3c-e5b8-45bf-8e24-2c4be796b193",
    "question": "Discuss the structure and function of the nervous system in humans.",
    "subject": "Biology",
    "topic": "Nervous System",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "02cfe9b9-2aca-4732-a76c-2823d110ba88",
    "question": "Explain the concept of ecological succession and its role in ecosystem development.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "180012a7-92e1-417f-8ad6-6206eb18ca2e",
    "question": "Describe the different types of symbiotic relationships in ecosystems.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "1bedffbc-016b-4614-8764-5889a6ef2933",
    "question": "Explain the process of DNA replication and its significance in genetic inheritance.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "4494e0c8-b2bb-43df-bf86-c3877f080c73",
    "question": "Discuss the role of vaccines in preventing infectious diseases.",
    "subject": "Biology",
    "topic": "Immunology",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "22abd61d-a813-4997-8efa-e8456f8fd56b",
    "question": "Explain the concept of natural selection and its role in evolution.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "be217f0a-8390-453a-8162-326ab54475aa",
    "question": "Explain the process of photosynthesis and its importance in plant metabolism.",
    "subject": "Biology",
    "topic": "Plant Physiology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "c15170fe-37e5-4c07-af45-d6614b3a3032",
    "question": "Describe the structure and function of DNA in the context of genetic information storage.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "aaa0a891-1430-4e33-9c6d-b9789fe8f7d4",
    "question": "Discuss the role of enzymes in biochemical reactions, providing examples.",
    "subject": "Biology",
    "topic": "Biochemistry",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "b5045fcc-3121-43ca-869c-0b520116b757",
    "question": "Explain the process of mitosis and its significance in cell division.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "97e71df1-25df-415c-8d70-222d73f25b1a",
    "question": "Describe the structure and function of the respiratory system in humans.",
    "subject": "Biology",
    "topic": "Human Anatomy",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "239a7c82-f7cf-4f85-8468-2a25b4ec8ec1",
    "question": "Discuss the concept of natural selection and its role in evolution.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "4afd4150-2503-4561-9b38-3ee36f1dd444",
    "question": "Explain the process of meiosis and its significance in sexual reproduction.",
    "subject": "Biology",
    "topic": "Reproductive Biology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "54083e15-5cb1-4a87-9bc8-61dd7a361452",
    "question": "Describe the structure and function of the nervous system in humans.",
    "subject": "Biology",
    "topic": "Human Physiology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "58481ffb-05e8-4b36-adf2-0e98d8357a4a",
    "question": "Discuss the importance of biodiversity and its conservation strategies.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "930a489a-4e83-4661-9858-7a208d946001",
    "question": "Explain the role of hormones in the endocrine system and their impact on homeostasis.",
    "subject": "Biology",
    "topic": "Endocrinology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "337e5e90-01f0-4601-abfa-c910b0a912f9",
    "question": "Describe the process of protein synthesis, including transcription and translation.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "ac2fd94e-ec63-42c5-8a6e-c50e467ee86e",
    "question": "Discuss the structure and function of different types of biomolecules, such as carbohydrates and lipids.",
    "subject": "Biology",
    "topic": "Biochemistry",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "937cdcbe-516d-4201-af40-4759bdd6304e",
    "question": "Explain the concept of homeostasis and provide examples of its regulation in the human body.",
    "subject": "Biology",
    "topic": "Physiology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "2aef0725-926f-4ae4-a80d-b25dd5fb7c30",
    "question": "Discuss the role of antibiotics in microbial infections and the issue of antibiotic resistance.",
    "subject": "Biology",
    "topic": "Microbiology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "f9a0f415-77bd-416a-af5d-f881a976736d",
    "question": "Describe the process of cellular respiration and its importance in energy production.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "4706ae8a-ebf3-44d8-97df-e6456a2e8411",
    "question": "Explain the differences between a plant cell and an animal cell, highlighting unique organelles.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "ed922900-5069-49b6-9715-aa204e851e40",
    "question": "Discuss the principles of Mendelian genetics and provide examples of genetic traits.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "c2387bf3-1e63-4102-b707-477aceaf3d51",
    "question": "Explain the role of ATP in cellular energy transfer and its significance in metabolic processes.",
    "subject": "Biology",
    "topic": "Biochemistry",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "baba25c8-4176-4ccd-adf8-657f2f55f979",
    "question": "Describe the structure and function of the digestive system in humans.",
    "subject": "Biology",
    "topic": "Human Anatomy",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "bb968f88-ecbb-4414-bc2c-4c711c27785d",
    "question": "Discuss the concept of ecosystems and the interactions between biotic and abiotic factors.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "abb8efe5-8326-4c34-bf63-816f4a28c58f",
    "question": "What is the primary function of mitochondria in a cell?",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "4699d799-865a-4ada-85ff-5dfe836d8561",
    "question": "Define the term 'genetic variation' and explain its importance in evolution.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "964eaee7-2348-4760-b542-94aafda21122",
    "question": "Describe the structure and function of the cell membrane.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "d7a95d8c-8efd-4de4-ab49-214da00c365e",
    "question": "Explain the process of photosynthesis and its significance in the biosphere.",
    "subject": "Biology",
    "topic": "Plant Physiology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "f2654419-d78e-4392-b5d0-ca953ad933ae",
    "question": "What is the role of enzymes in biological reactions?",
    "subject": "Biology",
    "topic": "Biochemistry",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "c760350d-52c5-4249-a0cc-f3cdb3db6e2d",
    "question": "Discuss the importance of biodiversity for ecosystem stability.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "ed5d479d-5af7-4d79-ad38-09e6c2051b22",
    "question": "Explain the concept of homeostasis in the human body.",
    "subject": "Biology",
    "topic": "Physiology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "8278ab7f-d1ee-4513-acf6-411534d4973d",
    "question": "Define the term 'allele' and explain its role in genetics.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "f43b5d9c-3ea2-4141-b615-30ccb126dfdd",
    "question": "Discuss the process of DNA replication in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "59decfbc-43be-44c7-ba75-1d7ef3fffed4",
    "question": "What is the function of the endoplasmic reticulum in a cell?",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "b8c28a6e-e1ef-47e5-8d9e-632e8a45988f",
    "question": "Explain the role of the Golgi apparatus in cellular processes.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "e2670773-3ae1-4218-9791-dc51bbbb5f85",
    "question": "Describe the process of meiosis and its significance in sexual reproduction.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "7fb8f61b-0ef0-4ba5-b654-77e2c57e595b",
    "question": "Discuss the importance of water in biological systems.",
    "subject": "Biology",
    "topic": "Biochemistry",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "d6755816-b2fd-4f63-8a7d-bf4b4dd15323",
    "question": "What is the structure and function of ribosomes in a cell?",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "23678f39-3d6b-4098-add6-b8d34d60ea38",
    "question": "Explain the concept of natural selection in the context of evolution.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "1bf7bf64-207e-42a3-8fad-c3a1f86fb5c3",
    "question": "Define the term 'ecosystem' and discuss its components.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "6d2444cb-5861-4a01-9e08-246ba0084142",
    "question": "Describe the structure of a typical animal cell.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "ea25acd3-e272-4467-8f3e-0981e9ee6cff",
    "question": "Explain the role of chloroplasts in plant cells.",
    "subject": "Biology",
    "topic": "Plant Physiology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "2f00a164-406a-4d2a-a671-2d357c4e3309",
    "question": "Discuss the significance of the nitrogen cycle in ecosystems.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "87ba7626-46ef-4d31-9306-e8c153e3bf54",
    "question": "What is the function of the nucleus in a eukaryotic cell?",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "cec15163-5faf-42c0-92ba-7e0de24208fa",
    "question": "Explain the process of transcription in molecular biology.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "fca91d63-7491-40d6-ad6a-98572ef00081",
    "question": "Define the term 'homeostasis' and provide an example.",
    "subject": "Biology",
    "topic": "Physiology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "909542a7-a411-4245-b3cc-c18956e8d717",
    "question": "Discuss the role of mitochondria in cellular respiration.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "25be1d3f-c250-4569-bef9-7010deedf0a4",
    "question": "Explain the principles of natural selection and its role in evolution.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "4c1271b8-4f08-40a1-b37e-46a980fbbe0f",
    "question": "Describe the structure and function of the Golgi apparatus.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "fe94e56c-96ed-412a-a4dd-f202977cd04f",
    "question": "Discuss the importance of biodiversity in ecosystem stability.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "63a6dfce-244d-4bf7-bc89-5cf6ca9c1384",
    "question": "Explain the process of meiosis and its significance in sexual reproduction.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "e87c07eb-2b0d-4eb2-a69f-9f949f9b36b6",
    "question": "Define the terms 'prokaryote' and 'eukaryote' and provide examples of each.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "00f5d99e-8bc1-41c3-b126-6966f399a970",
    "question": "Discuss the functions of the endoplasmic reticulum in a cell.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "32375b63-3f72-43aa-a56d-5771705eca36",
    "question": "Explain the concept of enzyme specificity in biochemical reactions.",
    "subject": "Biology",
    "topic": "Biochemistry",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "bff14661-0d91-4396-85c8-68948a08761a",
    "question": "Define the term 'ecosystem' and provide examples of terrestrial and aquatic ecosystems.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "40d76e98-1fa2-4157-be08-3a3d69408b70",
    "question": "Discuss the role of RNA in protein synthesis.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "ad313911-319f-4290-b3a8-d9255b85b044",
    "question": "Explain the difference between mitosis and meiosis in cell division.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "65a42b44-b1a4-455c-975f-96678c112de3",
    "question": "Define the terms 'predation' and 'competition' in ecology.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "bbe3d824-5f22-4798-8ac3-9df99b12a8b2",
    "question": "Discuss the structure and function of the chloroplast in plant cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "a50e53e8-7cf9-4ee7-8b03-094811bc58f6",
    "question": "Explain the concept of feedback inhibition in enzymatic reactions.",
    "subject": "Biology",
    "topic": "Biochemistry",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "8378a8c2-7599-4a37-b538-645f6c2ccdbd",
    "question": "Discuss the process of DNA replication in cellular biology.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "c284c591-d81a-48cc-acfd-a6a5b945f393",
    "question": "Define the terms 'allele' and 'genotype' in genetics.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "68149df6-4c57-46e7-8af8-2e64390e3d5a",
    "question": "Explain the role of the hypothalamus in the endocrine system.",
    "subject": "Biology",
    "topic": "Physiology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "2a26ae3c-72c3-47ad-84b7-a9de1fc5610c",
    "question": "Discuss the process of photosynthesis in plant cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "9646ac52-cc90-446d-9e27-cb4f2201b26e",
    "question": "Explain the process of transcription in molecular biology.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "c99e29a9-f69d-40d4-98b5-e3c86d4d9646",
    "question": "Discuss the role of enzymes in cellular metabolism.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "20e3d9b4-2a1c-4a4f-a94b-277a4a3fd472",
    "question": "Explain the process of mitosis and its significance in cell division.",
    "subject": "Biology",
    "topic": "Cell Division",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "398f6f7a-c57f-4b06-a9f6-9e430850ac19",
    "question": "Discuss the concept of genetic drift and its role in evolution.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "dc3ef130-82a9-4d5e-a137-6b835973260e",
    "question": "Explain the structure and function of the chloroplast in plant cells.",
    "subject": "Biology",
    "topic": "Plant Biology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "e4d0b60b-c1bc-4a3e-9e94-0af1c2d9fc6a",
    "question": "Discuss the process of meiosis and its significance in sexual reproduction.",
    "subject": "Biology",
    "topic": "Reproduction",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "8e4c4638-9d09-47e7-876d-b6cbcaf72259",
    "question": "Explain the concept of homeostasis in the human body.",
    "subject": "Biology",
    "topic": "Physiology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "17853ac7-6129-4a80-94a1-7eebea9b8ea8",
    "question": "Discuss the role of microorganisms in nutrient cycling in ecosystems.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "6ec435c2-ff8f-4837-a141-97db30511772",
    "question": "Explain the principles of PCR (Polymerase Chain Reaction) and its applications in molecular biology.",
    "subject": "Biology",
    "topic": "Biotechnology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "d03d9f7d-efe3-4d62-bc75-607ea6be893d",
    "question": "Discuss the structure and function of the endoplasmic reticulum in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "5c50b592-7994-4207-b934-25cc28e8a18b",
    "question": "Explain the process of protein synthesis, including transcription and translation.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "588b9139-b36e-4c71-a26e-10e4ebb7d40b",
    "question": "Discuss the differences between prokaryotic and eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "ba6cfe02-f567-4e7e-97dd-507608edc4a6",
    "question": "Explain the principles of natural selection and its role in evolution.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "c5f403c8-d376-4539-9949-2ba420e7c2f5",
    "question": "Discuss the role of hormones in the human endocrine system.",
    "subject": "Biology",
    "topic": "Endocrinology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "5433c49d-0b1d-4ad4-87c2-e3ea4695d802",
    "question": "Explain the concept of ecological succession and its different stages.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "2e1b604a-1841-4c94-8bb5-15bee2e1e1db",
    "question": "Discuss the structure and function of the mitochondria in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "fe2d8c45-8ef0-4319-a1d7-6397aa9efbb1",
    "question": "Explain the principles of Mendelian genetics and provide examples of Mendelian traits.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "2c5905a0-054e-43e0-b7a3-bc722d36094f",
    "question": "Discuss the process of photosynthesis and its importance in ecosystems.",
    "subject": "Biology",
    "topic": "Plant Biology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "f0cef0b5-f253-4e61-9a9e-87030987179e",
    "question": "Explain the principles of immunization and the role of vaccines in preventing diseases.",
    "subject": "Biology",
    "topic": "Immunology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "ad6304e0-1e7c-4eab-85eb-9add206f0335",
    "question": "Discuss the concept of biodiversity and its importance in ecological systems.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "598f1f9e-28ab-4e5e-b927-fe2ee33fdb29",
    "question": "Explain the process of transcription in molecular biology.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "65f29347-27a8-4f32-9705-6e89852fb51e",
    "question": "Discuss the role of mitochondria in cellular respiration.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "e90fac32-2bf5-42f1-b267-445334c9af57",
    "question": "Explain the concept of allosteric regulation in enzyme activity.",
    "subject": "Biology",
    "topic": "Enzymology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "fdca4098-fbfd-4f83-9204-571b3949b5fc",
    "question": "Describe the structure and function of the endoplasmic reticulum in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "39065e08-949f-4ff8-b25f-b466f7346eb8",
    "question": "Discuss the process of meiosis and its significance in sexual reproduction.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "f053e0d0-71ce-40cd-91f4-727cbf9df048",
    "question": "Explain the role of the hypothalamus in the regulation of the endocrine system.",
    "subject": "Biology",
    "topic": "Endocrinology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "1aef9369-8b34-492d-a1b8-f9c61a815376",
    "question": "Discuss the principles of natural selection and its role in evolution.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "952b0da0-3cf5-415d-ae41-5f2d7bac19f1",
    "question": "Explain the process of DNA replication and its fidelity mechanisms.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "63e9823f-a126-4da6-95f1-6e7a1346dbbe",
    "question": "Discuss the structure and function of ribosomes in protein synthesis.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "52389cb6-240e-4a94-b3cf-11e792496ca6",
    "question": "Explain the concept of feedback inhibition in metabolic pathways.",
    "subject": "Biology",
    "topic": "Metabolism",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "e6cfe612-7fda-407d-95e1-d96956a69424",
    "question": "Discuss the principles of gene regulation in prokaryotic organisms.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "5c766890-5be2-486c-a5f7-71fbbc84bf24",
    "question": "Explain the role of phagocytes in the immune system response.",
    "subject": "Biology",
    "topic": "Immunology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "0a1633a0-be31-49a4-9d59-5d765afa8fd7",
    "question": "Discuss the structure and function of the Golgi apparatus in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "8ff59699-86a0-4dd4-a91e-bec6b475b99b",
    "question": "Explain the principles of population ecology and factors affecting population growth.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "211c15e2-eca3-455e-95fa-fe0d9ff01fc4",
    "question": "Discuss the process of signal transduction in cellular communication.",
    "subject": "Biology",
    "topic": "Cell Signaling",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "07d8ce2a-246e-4219-8277-b0f20f37d479",
    "question": "Explain the structure and function of chloroplasts in plant cells.",
    "subject": "Biology",
    "topic": "Plant Biology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "87292888-8624-41d4-ab51-41f32ac923f6",
    "question": "Discuss the principles of neurobiology and the structure of a neuron.",
    "subject": "Biology",
    "topic": "Neuroscience",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "b68a2119-cf27-4418-9157-119882edecfa",
    "question": "Explain the concept of homeostasis and its importance in living organisms.",
    "subject": "Biology",
    "topic": "Physiology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "defddfed-4c4d-4c5a-9952-c67857adc084",
    "question": "Discuss the principles of genetic engineering and its applications in biotechnology.",
    "subject": "Biology",
    "topic": "Biotechnology",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "678555c9-1e6e-4355-a962-f79bc80c2dd8",
    "question": "Explain the role of non-coding RNAs in gene regulation.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "0e6eb2c4-f7bf-4d29-9cff-4b4843bed6d9",
    "question": "Explain the process of transcription in molecular biology, highlighting its key steps and significance.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "ec207ab2-c970-451f-9f86-955dee8f5cbd",
    "question": "Discuss the role of microRNAs in gene regulation and their implications in cellular processes.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "be24254a-e7c1-40f9-9342-dda37e9cbfee",
    "question": "Explain the principles of CRISPR-Cas9 technology and its applications in genetic engineering and medicine.",
    "subject": "Biology",
    "topic": "Genetic Engineering",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "158dbb6f-a9e7-44e2-a4a6-f814b771c718",
    "question": "Discuss the structure and function of the endoplasmic reticulum in eukaryotic cells, emphasizing its role in protein synthesis and modification.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "a0468b2e-8556-485e-89d4-e1bb2baf8bec",
    "question": "Explain the process of apoptosis and its importance in development, tissue homeostasis, and disease.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "ac769342-ab94-4bd4-bbc5-0f106337a015",
    "question": "Discuss the mechanism of action of enzymes, including the factors that influence enzyme activity.",
    "subject": "Biology",
    "topic": "Enzymology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "61d8c883-8e91-4a11-9cf8-38a2a80c1892",
    "question": "Explain the process of photosynthesis in plants, detailing the light-dependent and light-independent reactions.",
    "subject": "Biology",
    "topic": "Plant Physiology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "71aad419-906a-4cb6-af4e-32153a179189",
    "question": "Discuss the principles of population genetics and the factors influencing genetic variation within populations.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "3d2f8230-eafb-43e9-bf17-951fde54a05d",
    "question": "Explain the concept of ecological succession and the role of pioneer species in ecosystem development.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "fc83e5cc-1a1e-4fed-803f-3223588d7299",
    "question": "Discuss the structure and function of ribosomes in protein synthesis, emphasizing their roles in prokaryotic and eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "a14c2ccd-59b1-466f-8284-afd6e9f4d44b",
    "question": "Explain the process of DNA replication, highlighting the enzymes involved and the significance of fidelity in copying genetic information.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "3a42accd-be0c-4b2b-a61c-e4e19aa0d5a7",
    "question": "Discuss the role of stem cells in development, tissue regeneration, and potential therapeutic applications.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "3cbc1791-a5d6-498b-ab3d-28578c18c550",
    "question": "Explain the principles of immunology, including the functions of antibodies, T cells, and the major histocompatibility complex (MHC).",
    "subject": "Biology",
    "topic": "Immunology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "5db123f3-72cb-4413-8f6d-14ac8271a3bb",
    "question": "Discuss the process of meiosis, emphasizing the events that lead to genetic diversity during gamete formation.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "3e174aa7-813b-497f-b0c6-7ed4f0d61875",
    "question": "Explain the principles of hormonal regulation in the endocrine system, highlighting feedback mechanisms and target cell responses.",
    "subject": "Biology",
    "topic": "Endocrinology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "a06427d7-a7fc-46e2-a102-1fea837b1d5b",
    "question": "Discuss the structure and function of the Golgi apparatus in eukaryotic cells, emphasizing its role in protein processing and secretion.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "2171e52b-828c-4f6d-adfe-51fc592acdc4",
    "question": "Explain the process of chemiosmosis in cellular respiration, detailing the role of ATP synthase and the electron transport chain.",
    "subject": "Biology",
    "topic": "Cellular Respiration",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "94728c1e-c57b-483f-a187-fa02d23ad117",
    "question": "Discuss the principles of genetic engineering and the ethical considerations associated with manipulating the genetic material of organisms.",
    "subject": "Biology",
    "topic": "Genetic Engineering",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "bddeac8f-907f-495d-aea4-7b5d1c4edb19",
    "question": "Explain the concept of allosteric regulation of enzymes and its significance in metabolic pathways.",
    "subject": "Biology",
    "topic": "Enzymology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "ffa7019c-aed2-483a-a685-162c8a9472c8",
    "question": "Discuss the principles of ecological niche and the factors influencing species interactions within ecosystems.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "1521de70-5eda-4dea-a94a-c26ac9e807f2",
    "question": "Explain the process of DNA replication, highlighting the role of enzymes involved.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "ddae6770-300c-48e1-a696-78e7afb2617e",
    "question": "Discuss the principles behind the Polymerase Chain Reaction (PCR) and its applications in molecular biology.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "804f1160-d478-4a92-be69-3d3d26b7b329",
    "question": "Explain the concept of allosteric regulation in enzyme activity, providing an example.",
    "subject": "Biology",
    "topic": "Enzymology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "b1253196-95f2-4c92-b4b7-20e947456489",
    "question": "Discuss the process of transcription in eukaryotic cells, including the role of RNA polymerase.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "2105e7b2-42d8-49e1-8603-246b1c208d6a",
    "question": "Explain the principles of immunohistochemistry and its applications in biological research.",
    "subject": "Biology",
    "topic": "Immunology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "9ce268fd-4df8-40a5-ac4c-7b45087a1111",
    "question": "Discuss the structure and function of the endoplasmic reticulum in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "753eb39d-ee5a-40bf-8cfb-6d16073f7534",
    "question": "Explain the Hardy-Weinberg equilibrium and its significance in population genetics.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "492b6333-a298-4edf-baa3-1eaf14faeb79",
    "question": "Discuss the process of signal transduction in cells, emphasizing the role of second messengers.",
    "subject": "Biology",
    "topic": "Cell Signaling",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "14f6c366-f4c6-4c1d-ac4e-4496fb077762",
    "question": "Explain the process of meiosis and its role in sexual reproduction.",
    "subject": "Biology",
    "topic": "Cell Division",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "7206ad18-1963-4fdb-bf8f-0d2b8934a55b",
    "question": "What is the primary component of natural gas?",
    "subject": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "eeb1ff2b-1e84-4db4-9be6-70d0230a80e2",
    "question": "Name two elements in the halogen group.",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "46d76484-5786-42d1-8918-671d7f285510",
    "question": "Define 'stoichiometry' in chemistry.",
    "subject": "Chemistry",
    "topic": "Chemical Calculations",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "f30a5d89-2497-43d7-9cd6-fb55c8579461",
    "question": "What is the function of a catalyst in a chemical reaction?",
    "subject": "Chemistry",
    "topic": "Catalysis",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "2cbbbb10-8ab1-42c8-a303-da0fcc2d4392",
    "question": "Define 'isomerism' in chemistry.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "47a3fb8f-9a23-4408-9f29-549eb4c03096",
    "question": "What is the significance of the octet rule in chemical bonding?",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "987ffb60-8af5-44c4-8f32-eb665f3daeb8",
    "question": "Explain the concept of electronegativity in chemical bonding.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "9b5cca82-fc13-4340-af40-9f015b0209cc",
    "question": "What is the role of a buffer solution?",
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "b6e0aaea-aefa-437c-9918-cc97b84b7faf",
    "question": "Define 'enthalpy' in thermodynamics.",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "7b1fd6df-e886-428d-bd59-108b17b748e2",
    "question": "Explain the term 'ionization energy' in relation to atomic structure.",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "7330fa48-8215-4ddf-9dc4-9f87f65d199f",
    "question": "What is the purpose of a catalyst in a chemical reaction?",
    "subject": "Chemistry",
    "topic": "Catalysis",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "a947c922-9d3d-45bb-97ae-066bc1f52a11",
    "question": "Define 'oxidation state' in a chemical reaction.",
    "subject": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "3c2430ff-825d-4eb5-af22-0360ab8a8f16",
    "question": "Explain the concept of 'half-life' in radioactive decay.",
    "subject": "Chemistry",
    "topic": "Nuclear Chemistry",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "daf69aa6-db59-485f-a722-965215bad953",
    "question": "What is the significance of the Arrhenius equation in chemical kinetics?",
    "subject": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "88c197d2-873c-4fa6-9da6-34d60a19141c",
    "question": "Define 'isotonic solution' in the context of solutions.",
    "subject": "Chemistry",
    "topic": "Solutions",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "82541add-af93-45c5-b5ad-38578c541717",
    "question": "Explain the term 'hybridization' in the context of atomic orbitals.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "aa6401f3-9147-44ab-872b-d5b93eeb002c",
    "question": "What is the function of an indicator in titration?",
    "subject": "Chemistry",
    "topic": "Analytical Chemistry",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "3b6dc3c5-3a93-4d2c-9738-cb5581e485f0",
    "question": "Define 'covalent bond' and provide an example.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "439aad2e-a7a5-4114-bf49-5b6318837d17",
    "question": "Explain the concept of 'resonance' in organic chemistry.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "de688b6a-e6f4-497e-9a7c-941b6bf6e082",
    "question": "What is the purpose of a phase diagram in physical chemistry?",
    "subject": "Chemistry",
    "topic": "Phase Equilibria",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "18b5b324-d22c-48da-b8f3-4771c1319d55",
    "question": "Define 'activation energy' in the context of chemical reactions.",
    "subject": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "22b7cd81-0b9c-4497-b0a9-1aa28a1e51eb",
    "question": "Explain the term 'stoichiometric coefficient' in a chemical equation.",
    "subject": "Chemistry",
    "topic": "Chemical Equations",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "dc60ad5c-5135-46da-8387-3210cad0540c",
    "question": "What is the Bohr model of the atom?",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "4b72fc93-4f57-4757-84a3-5971574f6f49",
    "question": "Define 'polymerization' in the context of organic chemistry.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "marks": 1
  },
  {
    "id": "7b88fb57-0b51-401b-a6c6-ceb8417c71ac",
    "question": "Explain the concept of 'enthalpy change' in a chemical reaction.",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "c45960fc-a8be-4291-8022-df699c497d86",
    "question": "What is the difference between an exothermic and endothermic reaction?",
    "subject": "Chemistry",
    "topic": "Chemical Reactions",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "630dd8aa-f62a-44a6-b0c2-bcfcda827fe5",
    "question": "Discuss the properties of alkali metals in the periodic table.",
    "subject": "Chemistry",
    "topic": "Periodic Table",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "95329d36-bb17-4ab5-ad07-3d7e61096239",
    "question": "Explain the term 'heat of vaporization' in thermodynamics.",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "66e6c76b-7de9-42f2-840f-f68c01812330",
    "question": "Discuss the concept of 'bond polarity' in covalent molecules.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "902ae083-0e36-48b9-bf24-671162c9f07d",
    "question": "What is the significance of the Pauli exclusion principle in atomic structure?",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "6317025b-975f-40de-bb74-87fd101421f4",
    "question": "Explain the terms 'end point' and 'equivalence point' in titration.",
    "subject": "Chemistry",
    "topic": "Analytical Chemistry",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "5fed9826-ba95-4e6c-ad7b-531652682f05",
    "question": "Discuss the role of enzymes in biological reactions.",
    "subject": "Chemistry",
    "topic": "Biochemistry",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "299c6a43-3743-4205-afb3-74017b3bfdf5",
    "question": "Explain the concept of 'colligative properties' in solutions.",
    "subject": "Chemistry",
    "topic": "Solutions",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "31d2f578-c924-4fad-9ca1-8655925596c8",
    "question": "Discuss the principles of chromatography in analytical chemistry.",
    "subject": "Chemistry",
    "topic": "Analytical Chemistry",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "b2c5cc4c-f78e-42ce-9cbf-995fd5e684e1",
    "question": "Explain the term 'Hess's Law' in the context of thermodynamics.",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 2
  },
  {
    "id": "e32bb20e-b755-4177-8707-e666a459dacd",
    "question": "Explain the term 'arrangement of electrons' in the periodic table.",
    "subject": "Chemistry",
    "topic": "Periodic Table",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "bcb1d819-9b45-41f3-9d05-0afec926d6b2",
    "question": "Discuss the principles of asymmetric synthesis in organic chemistry.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "e8508515-fc2f-458a-8d0c-3fb512de1b83",
    "question": "Explain the term 'Haber process' and its significance in industrial chemistry.",
    "subject": "Chemistry",
    "topic": "Industrial Chemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "37fcbe8b-cdf4-482a-8fd9-ae8592db3295",
    "question": "Discuss the principles of mass spectrometry in analytical chemistry.",
    "subject": "Chemistry",
    "topic": "Analytical Chemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "732d770b-17e7-46ad-aec2-6af9f437fdf4",
    "question": "Explain the term 'bond dissociation energy' in chemical bonding.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "d7fe5c29-258f-4f0e-883d-98e9be03d07d",
    "question": "Discuss the principles of photochemical reactions in organic chemistry.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "19714167-caf5-4989-9aaf-f3173587450f",
    "question": "Explain the term 'Ksp' in the context of solubility product.",
    "subject": "Chemistry",
    "topic": "Chemical Equilibria",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "3c5d5319-fb4c-4573-b4bd-c88afc4c5f83",
    "question": "Discuss the principles of chiral molecules in stereochemistry.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "44889bec-3ac2-48af-bc31-b618d759a140",
    "question": "Explain the term 'activation energy barrier' in chemical reactions.",
    "subject": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "af0f55e0-df45-4943-b6dd-e782b2bf12c4",
    "question": "Explain the concept of electronegativity and its significance in chemical bonding.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "6966048b-fa61-41c5-b53a-8cc779396c2e",
    "question": "Describe the process of oxidation and reduction in chemical reactions. Provide an example.",
    "subject": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "6382be0d-11a5-4007-b36d-a92d7176b1cc",
    "question": "Discuss the Bohr model of the atom. How does it differ from the modern quantum mechanical model?",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "2662422f-86c3-43b3-a79b-7cf4d0a7c9ac",
    "question": "Define and differentiate between an exothermic and endothermic reaction. Provide examples of each.",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "a85514d5-8e2d-4c92-8b09-53b95a9ec076",
    "question": "Explain the concept of equilibrium in chemical reactions. How is it represented mathematically?",
    "subject": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "e3536614-4606-4140-a808-7432ebe12958",
    "question": "What is the significance of the periodic table in chemistry? Discuss the trends in atomic size and electronegativity across periods and groups.",
    "subject": "Chemistry",
    "topic": "Periodic Table",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "09f6b9f4-45be-4788-bdb6-131807921868",
    "question": "Explain the role of catalysts in chemical reactions. Provide examples of common catalysts and their applications.",
    "subject": "Chemistry",
    "topic": "Catalysis",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "27a0fe70-d003-41c8-8381-e18fc28ec491",
    "question": "Discuss the properties and uses of different types of polymers. Provide examples of natural and synthetic polymers.",
    "subject": "Chemistry",
    "topic": "Polymers",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "70234d73-0c3b-46a3-a072-3ac44eb6d48f",
    "question": "Define and explain the concept of molarity. How is it calculated, and what are its practical applications in chemistry?",
    "subject": "Chemistry",
    "topic": "Solution Chemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "03cfc4f0-c742-4da4-b251-e0a8dbcedf38",
    "question": "Discuss the principles of acid-base titrations. Provide an example and explain how the endpoint is determined.",
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "4a86c58b-bda7-4ebd-970c-0f280eedbb45",
    "question": "Explain the concept of resonance in organic chemistry. Provide examples to illustrate the resonance structures of molecules.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "29c908d3-078c-41c7-b6a8-d3bd968ca26c",
    "question": "Define the term 'isotope.' How do isotopes of an element differ from each other? Provide an example.",
    "subject": "Chemistry",
    "topic": "Isotopes",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "7ab73b45-b341-4bc9-ba83-52763db7fe5f",
    "question": "Discuss the principles of chromatography. How is it used for separation and analysis in chemistry?",
    "subject": "Chemistry",
    "topic": "Analytical Techniques",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "d6aa7824-56bf-4547-9cd6-f5a6cdb8ced1",
    "question": "Explain the concept of entropy in thermodynamics. How does it relate to the spontaneity of a chemical reaction?",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "84fff079-c8a0-4b31-9945-3beb95e59f1a",
    "question": "Define and differentiate between a covalent bond and an ionic bond. Provide examples of compounds with each type of bond.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "8713cb90-c862-42da-9b82-4f2dfc64d8b5",
    "question": "Discuss the principles of nuclear chemistry. What are the applications and potential risks associated with nuclear reactions?",
    "subject": "Chemistry",
    "topic": "Nuclear Chemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "989092d4-aaab-4a1a-aaf3-36e0a7cbff3c",
    "question": "Explain the concept of stoichiometry in chemical reactions. How is it used to calculate reactants and products?",
    "subject": "Chemistry",
    "topic": "Stoichiometry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "c37bf3ec-375d-41cc-83f9-52ceb73689d3",
    "question": "Discuss the properties and uses of noble gases. How do they differ from other elements in the periodic table?",
    "subject": "Chemistry",
    "topic": "Noble Gases",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "3f5edcc1-4044-441d-b83d-68feca526224",
    "question": "Define and explain the concept of Hess's law in thermodynamics. How is it applied to calculate enthalpy changes?",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "2e4e3117-a849-47a4-bcf5-a297fc7e1e86",
    "question": "Discuss the principles of electrochemistry. Explain the terms oxidation number and electrode potential.",
    "subject": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "Medium",
    "marks": 3
  },
  {
    "id": "870cb185-f82b-4a26-9d4a-ec6a0662f802",
    "question": "Explain the concept of quantum tunneling in the context of atomic and subatomic particles.",
    "subject": "Chemistry",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "3451dec1-1e52-4e8e-9471-db0c0e65cc25",
    "question": "Discuss the principles of nuclear magnetic resonance (NMR) spectroscopy. How is it used in structural determination?",
    "subject": "Chemistry",
    "topic": "Spectroscopy",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "496a6650-d458-4db1-bdcc-273b6db56cd5",
    "question": "Define and explain the terms stereoisomers and enantiomers. Provide an example to illustrate the concept.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "346d3db6-c28c-4b8f-bbbb-36f9817e0507",
    "question": "Discuss the concept of chiral centers in organic molecules. How do they influence the optical activity of compounds?",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "a1f0c230-80d4-4de1-87f7-77039ab12b5e",
    "question": "Explain the principles of mass spectrometry. How is it used for the analysis of compounds?",
    "subject": "Chemistry",
    "topic": "Analytical Techniques",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "8942360a-4f70-4bf0-9c51-08092e6bc3d1",
    "question": "Discuss the properties and applications of superconductors. What makes them unique in the field of materials science?",
    "subject": "Chemistry",
    "topic": "Materials Science",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "b59853a9-7bea-448f-ac1b-0b94909b14c3",
    "question": "Define and explain the concept of coordination compounds. How are they named, and what is their significance?",
    "subject": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "9f6099c8-7cf9-4b7b-a53f-ad3a96c0225c",
    "question": "Discuss the principles of X-ray crystallography. How is it used to determine the three-dimensional structures of molecules?",
    "subject": "Chemistry",
    "topic": "Structural Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "17a00018-dac8-4375-a134-548fe67e0c4a",
    "question": "Explain the concept of Green Chemistry. What are the key principles and benefits of adopting green synthetic methods?",
    "subject": "Chemistry",
    "topic": "Green Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "167ec2b3-6829-4eb5-a286-a3de6e8a965b",
    "question": "Define and explain the terms electrophile and nucleophile. Provide examples of reactions involving these species.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "15695dae-6dfa-4881-9f51-84b50b260769",
    "question": "Discuss the principles of photochemical reactions. How do these reactions differ from thermal reactions?",
    "subject": "Chemistry",
    "topic": "Photochemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "7e22213b-ccfe-4162-a34d-af276865e9d1",
    "question": "Explain the concept of Huckel's Rule in the context of aromaticity. How does it apply to aromatic compounds?",
    "subject": "Chemistry",
    "topic": "Aromatic Compounds",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "3bba64cf-3be6-4b29-b918-426f9ad23049",
    "question": "Discuss the principles of crystal field theory in coordination chemistry. How does it explain the colors of transition metal complexes?",
    "subject": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "6dfe3e58-246b-4d09-99df-3b4960be7272",
    "question": "Define and explain the terms amphiphilic and hydrophilic. Provide examples of molecules exhibiting these properties.",
    "subject": "Chemistry",
    "topic": "Physical Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "0717858f-0618-4f6e-8933-1901b90a44bd",
    "question": "Discuss the principles of solid-state chemistry. How do the structures of solids influence their properties?",
    "subject": "Chemistry",
    "topic": "Solid-State Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "b4f9a024-1a79-456a-8a3c-368d6ceb524d",
    "question": "Explain the concept of isomerism in coordination compounds. Provide examples of different types of isomerism.",
    "subject": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "444068a6-98fb-467a-8136-1f92a3e1754e",
    "question": "Define and explain the terms homologous series and functional group. Provide examples of compounds belonging to a homologous series.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "76284f1f-6465-4eb5-9c29-1392e949c99b",
    "question": "Discuss the principles of supramolecular chemistry. How are non-covalent interactions important in supramolecular systems?",
    "subject": "Chemistry",
    "topic": "Supramolecular Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "d1589e49-2e3f-465b-be4f-6d722c7c656e",
    "question": "Explain the principles of cheminformatics. How is computational chemistry used in drug discovery and design?",
    "subject": "Chemistry",
    "topic": "Computational Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "5f9863a5-2b63-4e80-9cbe-02cdc6a26955",
    "question": "Define and explain the concept of bioinorganic chemistry. How do metal ions play crucial roles in biological systems?",
    "subject": "Chemistry",
    "topic": "Bioinorganic Chemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "cfc67877-6336-4d17-a04b-eaf0065fa957",
    "question": "Explain the principles of the Heisenberg Uncertainty Principle. How does it limit our ability to simultaneously measure certain pairs of properties?",
    "subject": "Chemistry",
    "topic": "Quantum Mechanics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "ddc68ec0-7b1d-4552-bbc1-fa2fb8a5f383",
    "question": "Discuss the principles of electrocatalysis. How are catalysts used to enhance the efficiency of electrochemical reactions?",
    "subject": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "34258fcd-dbc9-46ad-befe-9ce2d69a7694",
    "question": "Define and explain the terms regioselectivity and stereoselectivity in organic reactions. Provide examples to illustrate each concept.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "db89358e-9018-4b4d-978a-9c30917529cc",
    "question": "Discuss the principles of molecular orbital theory. How is it used to explain the bonding in diatomic molecules?",
    "subject": "Chemistry",
    "topic": "Molecular Orbital Theory",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "5b569e98-1c8d-441c-80fb-c5859d9ae572",
    "question": "Explain the concept of chirality in coordination compounds. How do chiral ligands affect the properties of coordination complexes?",
    "subject": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "572cf169-a73f-4a7a-a10e-dd24770cb35b",
    "question": "Discuss the principles of asymmetric synthesis in organic chemistry. How is chirality induced in molecules during synthesis?",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "fb9eab09-6479-4412-80a9-f34f0f88db7b",
    "question": "Define and explain the terms Fick's laws of diffusion. How do these laws relate to the movement of gases and solutes in different media?",
    "subject": "Chemistry",
    "topic": "Physical Chemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "e8b6f068-0974-4244-9668-1153d59999d5",
    "question": "Discuss the principles of time-resolved spectroscopy. How is it applied to study ultrafast processes in chemical reactions?",
    "subject": "Chemistry",
    "topic": "Spectroscopy",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "f573c66b-a806-4a83-a8f2-d35ac8637e3b",
    "question": "Explain the concept of phase equilibria in chemical systems. How do phase diagrams represent the relationships between different phases?",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "cb5cfa5f-712d-4e9e-a205-f04e72ee2c6b",
    "question": "Define and explain the terms conformational isomerism and rotational isomerism in organic molecules. Provide examples.",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "f381182c-28f0-4f45-8712-180fbe82a233",
    "question": "Discuss the principles of enzyme kinetics. How do enzymes catalyze biological reactions, and what factors influence their activity?",
    "subject": "Chemistry",
    "topic": "Biochemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "c99c276c-675c-4c34-b272-b892be164bca",
    "question": "Explain the concept of chemical kinetics. How are reaction rates determined experimentally, and what factors affect reaction rates?",
    "subject": "Chemistry",
    "topic": "Kinetics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "c2c8ee3e-4e53-4870-8ed6-d9cfd5e6d693",
    "question": "Define and explain the terms regioregularity and tacticity in polymer chemistry. How do these factors influence polymer properties?",
    "subject": "Chemistry",
    "topic": "Polymers",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "c996cb6a-37c4-4767-a7d7-6b0068d3ed96",
    "question": "Discuss the principles of fluorescence spectroscopy. How is it used to study the electronic structure and dynamics of molecules?",
    "subject": "Chemistry",
    "topic": "Spectroscopy",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "33027fe0-9517-4ba0-a069-b6b0e6fabdca",
    "question": "Explain the concept of non-ideal solutions in physical chemistry. How are deviations from ideal behavior described and analyzed?",
    "subject": "Chemistry",
    "topic": "Solution Chemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "054e01c2-2a9b-40ee-b743-c7a0587de340",
    "question": "Define and explain the terms mesomerism and hyperconjugation in organic chemistry. How do they contribute to the stability of molecules?",
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "34e66273-848c-487c-a05c-a731996b3493",
    "question": "Discuss the principles of electroanalytical techniques. How are voltammetry and potentiometry used in chemical analysis?",
    "subject": "Chemistry",
    "topic": "Analytical Techniques",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "d2fc821f-b6c7-4122-ad66-1a7f1340251b",
    "question": "Explain the concept of Huckel's Rule in the context of pi-electron systems. How does it apply to aromaticity in organic molecules?",
    "subject": "Chemistry",
    "topic": "Aromatic Compounds",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "9ca3c249-00e4-4621-8e6e-6b92b741fec9",
    "question": "Define and explain the terms entropy and enthalpy in thermodynamics. How are they related to the spontaneity of a chemical process?",
    "subject": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "b75379b7-7d30-48ce-9938-b10fb5e10d53",
    "question": "Discuss the principles of solid-state NMR spectroscopy. How is it used to study the structure and dynamics of solid materials?",
    "subject": "Chemistry",
    "topic": "Solid-State Chemistry",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "b0f5d868-49fe-48f3-9729-0bfe996767b6",
    "question": "Explain the concept of molecular orbital theory and its application in predicting the magnetic behavior of molecules.",
    "subject": "Chemistry",
    "topic": "Molecular Orbital Theory",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "ea6832d3-6cbb-4abf-a719-f417a186bdb3",
    "question": "Discuss the principles of Green Chemistry. How does it contribute to sustainable and environmentally friendly chemical processes?",
    "subject": "Chemistry",
    "topic": "Green Chemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "3a910dbd-547b-4f5b-bff1-fee7ede18ee2",
    "question": "Explain the concept of chiral centers in organic molecules. How do enantiomers and diastereomers differ?",
    "subject": "Chemistry",
    "topic": "Stereochemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "0f42dd6a-fd77-43af-8d7a-166c135b7e73",
    "question": "Discuss the principles of nuclear magnetic resonance (NMR) spectroscopy. How is it used for structural analysis in organic chemistry?",
    "subject": "Chemistry",
    "topic": "NMR Spectroscopy",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "48868ade-87e8-4121-99a7-8b1a37a80238",
    "question": "Explain the concept of coordination compounds. Discuss their structures, bonding, and applications in catalysis and medicine.",
    "subject": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "ae71a0f1-63df-44a8-9d04-1aee1bff94ee",
    "question": "Discuss the principles of photochemical reactions. Provide examples and explain the role of light in driving these reactions.",
    "subject": "Chemistry",
    "topic": "Photochemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "0fff1772-67bb-4b3f-a6b7-5f1d6898c92b",
    "question": "Explain the concept of supramolecular chemistry. Provide examples of supramolecular structures and their significance in biological systems.",
    "subject": "Chemistry",
    "topic": "Supramolecular Chemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "241d310b-de84-4705-acaf-39215942a339",
    "question": "Discuss the principles of transition metal catalysis in organic synthesis. Provide specific examples of reactions facilitated by transition metal catalysts.",
    "subject": "Chemistry",
    "topic": "Transition Metal Catalysis",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "90f277ff-f874-4cbf-a3cc-c086adaab7b0",
    "question": "Explain the concept of Huckel's rule in aromaticity. How does it apply to aromatic compounds, and what are its exceptions?",
    "subject": "Chemistry",
    "topic": "Aromaticity",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "504ce157-53f7-4c71-8b84-57b14d769dfa",
    "question": "Discuss the principles of organometallic chemistry. How are organometallic compounds used in catalysis and industrial processes?",
    "subject": "Chemistry",
    "topic": "Organometallic Chemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "4bd1595c-9109-407a-97d4-4179138969c8",
    "question": "Explain the principles of mass spectrometry. How is mass spectrometry used for the identification of organic compounds?",
    "subject": "Chemistry",
    "topic": "Mass Spectrometry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "1780b408-2d1a-4baf-a27f-ea3ba0991a83",
    "question": "Discuss the principles of solid-state chemistry. How do the arrangement and properties of atoms differ in solids compared to liquids and gases?",
    "subject": "Chemistry",
    "topic": "Solid-State Chemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "13022234-e5ae-4ddc-8055-1a3430e3eb35",
    "question": "Explain the concept of asymmetric synthesis in organic chemistry. Provide examples of chiral molecules prepared using asymmetric synthesis.",
    "subject": "Chemistry",
    "topic": "Asymmetric Synthesis",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "8fbb4a5a-118f-4b79-ac60-3550fd882584",
    "question": "Discuss the principles of quantum chemistry. How does quantum mechanics describe the behavior of electrons in atoms and molecules?",
    "subject": "Chemistry",
    "topic": "Quantum Chemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "b1977e8a-14ae-4abf-9ac0-0bd91ddfc791",
    "question": "Explain the concept of dynamic equilibrium in chemical reactions. Provide examples and discuss the factors that influence equilibrium constants.",
    "subject": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "65ba73d9-2ad5-46c7-bd44-f8e091ea5e06",
    "question": "Discuss the principles of medicinal chemistry. How are chemical compounds designed for specific therapeutic purposes?",
    "subject": "Chemistry",
    "topic": "Medicinal Chemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "70c474f7-f22c-4266-9978-ecc06fcfd630",
    "question": "Explain the concept of isomerism in coordination compounds. Provide examples of different types of isomerism in coordination chemistry.",
    "subject": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "1e845371-db7c-49eb-b336-0bc1253dcae6",
    "question": "Discuss the principles of time-resolved spectroscopy. How is it used to study fast chemical reactions and dynamic processes?",
    "subject": "Chemistry",
    "topic": "Spectroscopy",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "c983d57b-a8c9-40a4-b063-491e494c46be",
    "question": "Explain the principles of crystallography. How is X-ray crystallography used to determine the three-dimensional structures of molecules?",
    "subject": "Chemistry",
    "topic": "Crystallography",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "3e9b5652-b61d-4750-a2d9-35bf005372d6",
    "question": "Discuss the principles of organophosphorus chemistry. How are organophosphorus compounds used in various applications, including pesticides?",
    "subject": "Chemistry",
    "topic": "Organophosphorus Chemistry",
    "difficulty": "Hard",
    "marks": 3
  },
  {
    "id": "58c04395-c9f8-4660-a9f8-5a295d248b1a",
    "question": "Discuss the principles of genetic engineering, focusing on the use of recombinant DNA technology.",
    "subject": "Biology",
    "topic": "Biotechnology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "63457b37-ea61-438b-8f0e-590ffc3a1810",
    "question": "Explain the principles of enzyme kinetics and the factors affecting enzyme activity.",
    "subject": "Biology",
    "topic": "Enzymology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "9297db25-c587-43ed-992f-675adad1aba3",
    "question": "Discuss the structure and function of mitochondria in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "f0a261e2-b50d-4ea9-a1a8-3c0a80dc67f9",
    "question": "Explain the process of RNA interference (RNAi) and its applications in gene regulation.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "83c72dcd-57c9-4ecc-827c-8a0606f612ae",
    "question": "Discuss the principles of electrophoresis and its applications in molecular biology.",
    "subject": "Biology",
    "topic": "Biotechnology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "4d73c485-716b-4ef6-ab36-aa9bebe2e9d1",
    "question": "Explain the concept of apoptosis and its role in cell homeostasis.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "39f20955-60ef-423b-9c1e-c7df564e490c",
    "question": "Discuss the principles of chromatin structure and its role in gene regulation.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "e9666bbf-7fa9-45d6-b214-8a43527c0f3b",
    "question": "Explain the process of nitrogen fixation and its importance in the nitrogen cycle.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "27e3c293-085c-44e9-acee-9e0996a5df7a",
    "question": "Discuss the principles of flow cytometry and its applications in cell biology.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "9b7d442f-5f80-4554-9694-fefa9bea7df6",
    "question": "Explain the process of DNA methylation and its role in epigenetic regulation.",
    "subject": "Biology",
    "topic": "Epigenetics",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "7bf02791-a855-4e49-8331-35a5e030298a",
    "question": "Discuss the principles of magnetic resonance imaging (MRI) and its applications in medical diagnostics.",
    "subject": "Biology",
    "topic": "Medical Imaging",
    "difficulty": "Hard",
    "marks": 2
  },
  {
    "id": "cb258fd0-bcd6-46fd-bc6e-eee2c2fa8253",
    "question": "Explain the process of transcription in molecular biology.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "8da9a273-7526-4f70-b8fd-baaf24a53261",
    "question": "Discuss the role of mitochondria in cellular respiration.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "0c02d61b-5f56-46ec-9855-779446f4bf26",
    "question": "Explain the concept of allosteric regulation in enzyme function.",
    "subject": "Biology",
    "topic": "Enzymology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "5eea1f0c-c77b-473c-97cf-b878802b8d36",
    "question": "Discuss the process of somatic cell nuclear transfer in cloning.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "9c7231be-8aad-4133-83cb-1b50c6200d25",
    "question": "Explain the mechanism of action of antibiotics in inhibiting bacterial growth.",
    "subject": "Biology",
    "topic": "Microbiology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "69c11fe1-5478-4539-af15-9a7a4a7235c9",
    "question": "Discuss the structure and function of the Golgi apparatus in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "dd73f31d-7145-4988-8239-5d23ac3fc5b7",
    "question": "Explain the concept of genetic drift and its impact on population genetics.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "cbc2d6ab-0aec-45d0-81fa-a76977ff91ec",
    "question": "Discuss the role of neurotransmitters in synaptic transmission.",
    "subject": "Biology",
    "topic": "Neurobiology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "e9988ecb-9da6-4d38-8299-50dbc7316b45",
    "question": "Explain the process of meiosis and its significance in sexual reproduction.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "551a29be-ce53-4432-a2a5-69f106102948",
    "question": "Discuss the structure and function of ribosomes in protein synthesis.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "3b74bc11-d19e-4a6b-81bd-58df1ac79717",
    "question": "Explain the concept of feedback inhibition in metabolic pathways.",
    "subject": "Biology",
    "topic": "Biochemistry",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "e88e71c5-b76b-4376-bb0d-ebf1e5b0cf1b",
    "question": "Discuss the process of natural selection and its role in evolution.",
    "subject": "Biology",
    "topic": "Evolution",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "c0cc94e4-e6a5-443e-a61a-89a42e33aed8",
    "question": "Explain the concept of homeostasis in physiological regulation.",
    "subject": "Biology",
    "topic": "Physiology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "b741b5b2-172f-4dc9-8fb7-91ffc7f11498",
    "question": "Discuss the role of tRNA in protein synthesis.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "9764acb9-1859-459a-858d-4b1809140061",
    "question": "Explain the process of signal transduction in cell communication.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "82e1a71b-56d4-414e-bcf7-ed462f9eacea",
    "question": "Discuss the structure and function of the endoplasmic reticulum in eukaryotic cells.",
    "subject": "Biology",
    "topic": "Cell Biology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "b250e08f-a1b0-474c-93db-b1d5e2fdfd5a",
    "question": "Explain the concept of PCR (Polymerase Chain Reaction) in molecular biology.",
    "subject": "Biology",
    "topic": "Molecular Biology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "318ff7a6-016e-4874-841b-30da0cabe3bc",
    "question": "Discuss the principles behind the operon model in prokaryotic gene regulation.",
    "subject": "Biology",
    "topic": "Genetics",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "21db1b09-8da7-45f7-8dbe-a1059dda9b74",
    "question": "Explain the concept of ecological succession in ecosystems.",
    "subject": "Biology",
    "topic": "Ecology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "04aee70d-2599-4c98-909d-1d7ae1e21df0",
    "question": "Discuss the role of the hypothalamus in the endocrine system.",
    "subject": "Biology",
    "topic": "Endocrinology",
    "difficulty": "Hard",
    "marks": 1
  },
  {
    "id": "ce833c6e-43e5-440c-9dfb-2a07cc04e6bb",
    "question": "What is the atomic number of carbon?",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "ecb85286-731e-4409-9f4d-11b00c2069a3",
    "question": "Which element is known as the 'universal solvent'?",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "d772f0e2-44b9-472d-a342-2ad8d8706a67",
    "question": "What is the chemical symbol for gold?",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "dacb2cbe-79a6-4cf8-931d-1e026e518ef2",
    "question": "How many valence electrons does oxygen have?",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "d6ab1e46-fd00-407c-8a44-3dddf5fbd1f2",
    "question": "What is the formula for water?",
    "subject": "Chemistry",
    "topic": "Chemical Formulas",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "3b1e44f0-7d06-4b7a-ad2f-cb59f4381172",
    "question": "Which gas is responsible for the greenhouse effect?",
    "subject": "Chemistry",
    "topic": "Gases",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "aa80bf0d-3055-4e19-8590-408b25954621",
    "question": "What is the pH of a neutral solution?",
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "bfe78ea5-e107-4cd5-b8fe-c1188d9b9d31",
    "question": "Name the process of converting a gas into a liquid.",
    "subject": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "95179599-9b0b-458d-a6a3-b261263dcc05",
    "question": "What is the SI unit of pressure?",
    "subject": "Chemistry",
    "topic": "Units",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "5699f09d-07b1-41c8-b414-eb5ebfdb3523",
    "question": "What is the chemical formula for table salt?",
    "subject": "Chemistry",
    "topic": "Chemical Formulas",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "3d2a2b09-3312-4c82-88ca-30977f225990",
    "question": "What is the chemical formula for methane?",
    "subject": "Chemistry",
    "topic": "Chemical Formulas",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "a0279491-5426-4c57-8921-739fcd0cbf3f",
    "question": "Which gas is produced during photosynthesis?",
    "subject": "Chemistry",
    "topic": "Chemical Reactions",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "b156a6db-c54e-481a-921b-b4389d4533cf",
    "question": "What is the formula for the area of a rectangle?",
    "subject": "Chemistry",
    "topic": "Mathematics in Chemistry",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "af10eae8-d90f-4449-ad9b-67b1484efca1",
    "question": "Name the process of conversion of a solid directly into a gas.",
    "subject": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "691952ae-a3c5-4502-9eed-8ae643a517e3",
    "question": "What is the chemical symbol for helium?",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "e004998d-106e-4f9f-9e37-a44ac9320032",
    "question": "Explain the difference between an element and a compound.",
    "subject": "Chemistry",
    "topic": "Elements and Compounds",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "a55eb8d8-d341-4391-9c15-d970ad98ffb7",
    "question": "Describe the structure of an atom.",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "61b9836b-45c2-4d98-bd45-97a614e0a8b9",
    "question": "What is the law of conservation of mass?",
    "subject": "Chemistry",
    "topic": "Laws of Chemistry",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "413f1613-2321-49b5-a1f7-a5a62dc4f6fb",
    "question": "Compare acids and bases in terms of their pH levels.",
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "9e2a10b5-0758-434e-a9d5-a4955268bbc3",
    "question": "Explain the process of photosynthesis.",
    "subject": "Chemistry",
    "topic": "Chemical Reactions",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "500c4936-5d34-4d4b-a2fb-283c8689d2ad",
    "question": "What is the significance of the periodic table in chemistry?",
    "subject": "Chemistry",
    "topic": "Periodic Table",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "adbdbb01-ad74-4419-9473-2c948affb9e6",
    "question": "Define the term 'mole' in chemistry.",
    "subject": "Chemistry",
    "topic": "Chemical Quantities",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "fa939344-1576-403d-bc19-ac9124afcc72",
    "question": "How is the chemical formula of a compound determined?",
    "subject": "Chemistry",
    "topic": "Chemical Formulas",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "e2d7b4a1-2e70-4c20-bec8-fb188d56fb0b",
    "question": "Explain the difference between an exothermic and endothermic reaction.",
    "subject": "Chemistry",
    "topic": "Chemical Reactions",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "aaadd1d6-f6e2-4ff4-88b3-6162a29620b0",
    "question": "Describe the properties of the three states of matter.",
    "subject": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "65d1a6ab-ba35-4df9-b175-af71cc54c812",
    "question": "What is the role of catalysts in chemical reactions?",
    "subject": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "42c00c22-ce88-4ea2-a6db-c3084565eda9",
    "question": "Explain the concept of electronegativity in chemical bonding.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "23515ea8-5043-46a1-a7d7-b992aab98caf",
    "question": "How does concentration affect the rate of a chemical reaction?",
    "subject": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "0f96db17-5a62-4fff-bb0e-43360de4daad",
    "question": "Define the term 'isotope' and provide an example.",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "6de3a9c9-7621-4f1d-b601-955cde6cfea8",
    "question": "Explain the concept of stoichiometry in chemical reactions.",
    "subject": "Chemistry",
    "topic": "Chemical Quantities",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "34704184-db9d-4880-ba7a-74a4e0de15f1",
    "question": "What is the difference between an element and a compound?",
    "subject": "Chemistry",
    "topic": "Elements and Compounds",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "ad044251-fe97-423f-8def-3c0246996998",
    "question": "Describe the properties of noble gases.",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "4368023d-702b-4434-b582-2547af4cb461",
    "question": "Explain the concept of a chemical equilibrium.",
    "subject": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "4c520c5d-f0f9-4b16-8020-31e1d2071a26",
    "question": "What is the role of enzymes in biological reactions?",
    "subject": "Chemistry",
    "topic": "Biochemistry",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "9df4706b-dc1d-4799-b619-bc56ce9b5ae4",
    "question": "Describe the structure of a covalent bond.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Easy",
    "marks": 2
  },
  {
    "id": "8bb0bf6a-799a-4908-a914-4373d5d5aacc",
    "question": "What is the SI unit of measurement for mass?",
    "subject": "Chemistry",
    "topic": "Units",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "d1437c2c-1fa6-42b7-805d-bb7855996d24",
    "question": "Define the term 'element' in chemistry.",
    "subject": "Chemistry",
    "topic": "Basic Concepts",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "6a671d03-9861-4e9b-966c-e8a012102b77",
    "question": "State the law of conservation of mass.",
    "subject": "Chemistry",
    "topic": "Laws of Chemistry",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "39602665-ff3c-45df-97f9-1de0d6c5cdb7",
    "question": "What is the chemical symbol for gold?",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "4ab0cc14-3dba-4a2a-930e-b5c2776cbded",
    "question": "Define 'molecule' in chemistry.",
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "cd96b530-bba0-4ad8-a396-9495e3824609",
    "question": "What is the pH scale used for?",
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "cad8f1c4-07b5-4dc2-bcf7-af9e82e620df",
    "question": "Name two noble gases.",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "4c6c4cc8-7c95-41ff-9cae-3c3fd11c2beb",
    "question": "What is the atomic number of carbon?",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "61cf9ca3-3c36-4fa4-ac1a-b798fdcde2dc",
    "question": "Define 'isotope' in chemistry.",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "e92367f1-1044-4f58-95ae-4be2fad25fbd",
    "question": "What is the common name for H2O?",
    "subject": "Chemistry",
    "topic": "Chemical Formulas",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "7831efbd-9dfc-4082-a93e-d5ff539d81b1",
    "question": "State Avogadro's law.",
    "subject": "Chemistry",
    "topic": "Gas Laws",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "100b1d81-e87c-4a17-be49-13c251086766",
    "question": "What is the chemical formula for table salt?",
    "subject": "Chemistry",
    "topic": "Chemical Formulas",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "c5d91d78-33e7-4861-aedb-ee97a3d8d996",
    "question": "Define 'oxidation' in a chemical reaction.",
    "subject": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "7545d2d6-fff7-419f-ac27-61b0cf6e956f",
    "question": "Name the four states of matter.",
    "subject": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "3baba856-e7c6-44ca-a028-a2c21e2d0500",
    "question": "What is the chemical symbol for sodium?",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "5246c6e8-5259-47d4-be01-b35cc0600af1",
    "question": "Define 'exothermic reaction.'",
    "subject": "Chemistry",
    "topic": "Chemical Reactions",
    "difficulty": "Easy",
    "marks": 3
  },
  {
    "id": "9c1a0601-b9ef-47ac-8991-34a3e066ae61",
    "question": "In the periodic table, which group do noble gases belong to?",
    "subject": "Chemistry",
    "topic": "Periodic Table",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "20f1e63d-6853-491b-b44e-fe352304dbf9",
    "question": "What is the chemical symbol for iron?",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "9fed5703-f95d-4d65-aec4-932862be5a3f",
    "question": "What is the main component of natural gas?",
    "subject": "Chemistry",
    "topic": "Gases",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "00b33e4a-ed1f-470c-9531-ff6ab9b1f7e1",
    "question": "How many electrons are present in a hydrogen molecule?",
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "ecf58bbc-33dd-485b-8d5d-3686f21def3c",
    "question": "What is the chemical symbol for sodium?",
    "subject": "Chemistry",
    "topic": "Elements",
    "difficulty": "Easy",
    "marks": 1
  },
  {
    "id": "2a140326-df5d-4608-89ff-c90349bf9182",
    "question": "What is the chemical formula for methane?",
    "subject": "Chemistry",
    "topic": "Chemical Formulas",
    "difficulty": "Easy",
    "marks": 1
  }
];   module.exports = { data: sampleListings };