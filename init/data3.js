const sampleListings = [
    {
      "id": "a07a6a4a-7d9a-4c8d-9179-e05acecca7c3",
      "question": "What is the SI unit of measurement for time?",
      "subject": "Physics",
      "topic": "Units",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "9ccc019f-e6e5-4935-aaa4-310f22fd4e52",
      "question": "What force keeps objects on the Earth's surface?",
      "subject": "Physics",
      "topic": "Forces",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "d221a3b7-6f67-4afb-8535-9aa2ba21176c",
      "question": "What is the formula for calculating speed?",
      "subject": "Physics",
      "topic": "Speed",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "383d7034-5dc7-4691-9715-77ea892ee685",
      "question": "What is the unit of measurement for force?",
      "subject": "Physics",
      "topic": "Forces",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "97aaadd6-f4c5-4c92-a98a-285cb0d85ffa",
      "question": "What is the formula for calculating work?",
      "subject": "Physics",
      "topic": "Work",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "754a0164-2964-476d-a4f6-c810ca174234",
      "question": "What is the acceleration due to gravity on Earth?",
      "subject": "Physics",
      "topic": "Gravity",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "d69ac6bb-23c8-4f44-ac2e-fc0e41753a86",
      "question": "What property of matter measures its resistance to a change in motion?",
      "subject": "Physics",
      "topic": "Inertia",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "10ad2138-7603-48e1-a8a2-ba6f0477638e",
      "question": "What is the unit of measurement for energy?",
      "subject": "Physics",
      "topic": "Energy",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "577aff63-d7d1-43e9-98a7-c226e5da3d77",
      "question": "What law states that energy cannot be created or destroyed, only transformed?",
      "subject": "Physics",
      "topic": "Energy Conservation",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "800ac575-36c6-4ab9-95df-f409e1422230",
      "question": "What does the term 'AC' stand for in electricity?",
      "subject": "Physics",
      "topic": "Electricity",
      "difficulty": "Easy",
      "marks": 1
    },
    {
      "id": "69721ce2-c280-490e-b8a0-aa097f15d658",
      "question": "What is the SI unit of electric current?",
      "subject": "Physics",
      "topic": "Electricity",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "726b5296-0d50-4734-bf3d-e9e250413af4",
      "question": "What is the formula for calculating kinetic energy?",
      "subject": "Physics",
      "topic": "Energy",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "2ef454be-c427-473d-a732-6dc07adb546a",
      "question": "What is the law that states that the total electric flux through a closed surface is equal to the enclosed charge divided by the electric constant?",
      "subject": "Physics",
      "topic": "Electricity",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "2c7b2c3a-e8bc-4a12-a3a5-ca174a1fe3ba",
      "question": "What is the process of a substance changing directly from a solid to a gas called?",
      "subject": "Physics",
      "topic": "States of Matter",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "12f35f3f-d177-4461-96e5-9fd84fda7bb2",
      "question": "What is the phenomenon where a wave changes direction upon encountering an obstacle or aperture?",
      "subject": "Physics",
      "topic": "Waves",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "7d3c54ea-d8b8-4139-a361-667d59c8f8a8",
      "question": "What is the resistance of an object to any change in its state of motion or rest?",
      "subject": "Physics",
      "topic": "Mechanics",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "e371bdad-a911-4959-814c-ad123ab294f4",
      "question": "What is the measure of disorder or randomness in a closed system?",
      "subject": "Physics",
      "topic": "Thermodynamics",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "86b21111-5952-43ab-aec5-8a2d11fa5526",
      "question": "What is the SI unit of force?",
      "subject": "Physics",
      "topic": "Mechanics",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "2adb7f38-062d-47f5-86a9-2680f64e73e9",
      "question": "What is the bending of light when it passes from one medium to another?",
      "subject": "Physics",
      "topic": "Optics",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "1ad5ce06-1015-4301-a77c-c093ea598af0",
      "question": "What is the rate at which work is done called?",
      "subject": "Physics",
      "topic": "Energy",
      "difficulty": "Medium",
      "marks": 1
    },
    {
      "id": "4e66313d-07e6-432e-acdd-43a0b233cde8",
      "question": "What is the Heisenberg Uncertainty Principle?",
      "subject": "Physics",
      "topic": "Quantum Mechanics",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "99cfcbc1-a589-4010-9ea4-87d2c1fc1dfb",
      "question": "What is the Schrödinger equation used to describe?",
      "subject": "Physics",
      "topic": "Quantum Mechanics",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "766bac7a-9801-4068-b795-2acd3769120e",
      "question": "What is the significance of Planck's constant?",
      "subject": "Physics",
      "topic": "Quantum Physics",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "c307c0bb-7c1b-41bb-8642-37e49286541d",
      "question": "What does the term 'quantum entanglement' refer to?",
      "subject": "Physics",
      "topic": "Quantum Physics",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "56d87b0d-5c00-4d19-b8e9-9a16a268e6b7",
      "question": "What are black holes?",
      "subject": "Physics",
      "topic": "Astrophysics",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "7cbb7f7a-076f-413c-a85d-ce727679e81b",
      "question": "What is dark matter?",
      "subject": "Physics",
      "topic": "Cosmology",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "dea1a945-5519-49cc-ac0a-fc13f8f9a5ed",
      "question": "Explain the concept of antimatter.",
      "subject": "Physics",
      "topic": "Particle Physics",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "62305bc6-aefe-4543-a546-ff146e65165a",
      "question": "What is Hawking radiation?",
      "subject": "Physics",
      "topic": "Black Holes",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "76b1b687-a406-4b87-9a08-49b99bd8e9cb",
      "question": "Define the concept of string theory.",
      "subject": "Physics",
      "topic": "Theoretical Physics",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "c27594df-38e1-4605-bc17-351df4c8df0e",
      "question": "What is the Higgs boson particle?",
      "subject": "Physics",
      "topic": "Particle Physics",
      "difficulty": "Hard",
      "marks": 1
    },
    {
      "id": "7990ad78-11e7-4a2f-8cdf-732e838a31df",
      "question": "What is the speed of light?",
      "subject": "Physics",
      "topic": "Waves",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "5ab0df77-4c81-41c1-8d2b-764753703260",
      "question": "Who is the author of '1984'?",
      "subject": "Literature",
      "topic": "Modern Classics",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "78f8fda9-ec4e-45e0-99a5-59fc821d6034",
      "question": "What is the largest planet in our solar system?",
      "subject": "Astronomy",
      "topic": "Planets",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "f13bf0e1-003e-4414-bc28-d9e6af7000b9",
      "question": "What is the formula for the area of a circle?",
      "subject": "Mathematics",
      "topic": "Geometry",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "3b56629e-c97c-4df4-932b-85a0c5023005",
      "question": "Who painted the Mona Lisa?",
      "subject": "Art",
      "topic": "Renaissance Art",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "b8ed4043-d620-44a3-9a3b-7fa4789eda5c",
      "question": "What is the chemical symbol for gold?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "b20ebfeb-8e1c-4713-9892-af387e1fb013",
      "question": "What is the longest river in the world?",
      "subject": "Geography",
      "topic": "Rivers",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "3039fc67-332f-40f4-b0a2-d5e08f6fe825",
      "question": "Who developed the theory of relativity?",
      "subject": "Physics",
      "topic": "Modern Physics",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "6ecee828-decd-4431-93b5-31916efc01b4",
      "question": "What is the main function of the kidneys?",
      "subject": "Biology",
      "topic": "Human Anatomy",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "0741c967-d1b7-4e24-b863-f6afa1ef3786",
      "question": "Who is the Greek god of the sea?",
      "subject": "Mythology",
      "topic": "Greek Mythology",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "cc524adc-e24e-4265-ae47-d13d12f4fced",
      "question": "What is the capital of Australia?",
      "subject": "Geography",
      "topic": "World Capitals",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "ebccec88-5fd1-4fb3-899a-ced6a53d429b",
      "question": "Who composed the 'Moonlight Sonata'?",
      "subject": "Music",
      "topic": "Classical Music",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "22ac6733-5ed9-48ea-ac44-641cb175b129",
      "question": "What is the smallest prime number?",
      "subject": "Mathematics",
      "topic": "Numbers",
      "difficulty": "Easy",
      "marks": 4
    },
    {
      "id": "086a94ff-1eb1-4ac3-a834-1de79ffec951",
      "question": "Who wrote 'To Kill a Mockingbird'?",
      "subject": "Literature",
      "topic": "American Classics",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "9cfc4fce-3bdc-4d4a-b9b8-90d5c1cf2abc",
      "question": "What is the formula for calculating work?",
      "subject": "Physics",
      "topic": "Work and Energy",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "639d7fa2-dca2-471b-8e20-8a17ea380b5d",
      "question": "What is the process of plants making their food called?",
      "subject": "Biology",
      "topic": "Photosynthesis",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "539ada21-553d-47cb-a4b8-e7ecca582189",
      "question": "Who is the protagonist in 'The Great Gatsby'?",
      "subject": "Literature",
      "topic": "American Classics",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "ce68f196-6d2d-4b1d-8f42-ec5b519e68bd",
      "question": "Which country is known as the Land of the Rising Sun?",
      "subject": "Geography",
      "topic": "Countries",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "10509600-3e4c-40af-8bb7-dd70560fc52a",
      "question": "What is the largest ocean on Earth?",
      "subject": "Geography",
      "topic": "Oceans",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "25794cf7-7fa4-41c5-b71f-104abe4f2738",
      "question": "Who is credited with inventing the telephone?",
      "subject": "History",
      "topic": "Inventions",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "9c280b7f-0cfb-476b-9e86-5089bccadf45",
      "question": "What is the currency of Japan?",
      "subject": "Economics",
      "topic": "Currency",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "3c2611e5-06c6-477f-878c-8a91ab6eb8c3",
      "question": "Who discovered penicillin?",
      "subject": "Medicine",
      "topic": "Medical Discoveries",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "f58729c0-1c42-44c9-8fca-e7b7a37ef5e8",
      "question": "What is the largest desert in the world?",
      "subject": "Geography",
      "topic": "Deserts",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "a0d37d97-a784-4168-b01c-c7a202a34e9e",
      "question": "Who painted the 'Starry Night'?",
      "subject": "Art",
      "topic": "Impressionism",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "b6a5dda9-a11f-49c7-a17b-affe2fd729bf",
      "question": "What is the process of converting water vapor to liquid called?",
      "subject": "Science",
      "topic": "States of Matter",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "101612c6-57c9-4d0d-968e-398781345a69",
      "question": "Which planet is known as the 'Red Planet'?",
      "subject": "Astronomy",
      "topic": "Planets",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "859b9ad3-1a71-4418-b86b-962d3d432dd4",
      "question": "Who wrote 'The Iliad'?",
      "subject": "Literature",
      "topic": "Classics",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "141c267e-da48-43cc-a537-eca657cbb3aa",
      "question": "What is the largest mammal?",
      "subject": "Biology",
      "topic": "Animals",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "c113a741-1961-4116-bbca-41ec8702cfe5",
      "question": "Who founded Microsoft?",
      "subject": "Technology",
      "topic": "Tech Companies",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "bdad3b6a-9ef3-4ff0-9d3a-4dd69722eb7c",
      "question": "What is the chemical symbol for silver?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "79293ea6-ee20-4f05-862b-5f512d58a1f0",
      "question": "What is the study of earthquakes called?",
      "subject": "Geology",
      "topic": "Seismology",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "08e89b71-f8f8-45c9-b4e2-20aeb40d7d44",
      "question": "Who directed the movie 'Inception'?",
      "subject": "Film",
      "topic": "Directors",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "b444a05f-716e-48eb-b91e-6718dda558fc",
      "question": "Which gas do plants primarily use during photosynthesis?",
      "subject": "Biology",
      "topic": "Photosynthesis",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "dc6b01f9-fda2-4561-890f-b68f6d01c8ed",
      "question": "Who composed the 'Four Seasons'?",
      "subject": "Music",
      "topic": "Classical Music",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "e3c433fc-8ba6-4581-8d38-65fda60b5797",
      "question": "What is the study of the universe called?",
      "subject": "Astronomy",
      "topic": "Cosmology",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "fc6f79e3-b21c-45ea-aa63-ffb6b409aaf8",
      "question": "What is the primary function of mitochondria?",
      "subject": "Biology",
      "topic": "Cell Biology",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "c976b57a-91ab-44c5-9288-8050e69748d5",
      "question": "Who painted the 'Mona Lisa'?",
      "subject": "Art",
      "topic": "Renaissance Art",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "9c9705e8-ec72-401a-9ce2-c06f86a0b2e2",
      "question": "What is the study of heredity called?",
      "subject": "Biology",
      "topic": "Genetics",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "d123ebe9-c6b6-450e-94d8-b9cfab41ba92",
      "question": "Who is known as the 'Father of Modern Physics'?",
      "subject": "Physics",
      "topic": "Scientists",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "ff6c7570-8f87-49a2-ae5a-dc2a08baac62",
      "question": "What is the boiling point of water in Celsius?",
      "subject": "Science",
      "topic": "States of Matter",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "c6854441-9b68-47db-92a9-ad198a3b2330",
      "question": "Who invented the telephone?",
      "subject": "History",
      "topic": "Inventions",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "e4449188-f727-4e01-8cb6-77d28709bd9b",
      "question": "What is the largest ocean in the world?",
      "subject": "Geography",
      "topic": "Oceans",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "29750e52-89a0-45d5-972a-83633ab4aeb9",
      "question": "Who wrote 'The Great Gatsby'?",
      "subject": "Literature",
      "topic": "American Classics",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "95c0c980-87df-48a1-88bd-05b376c6e615",
      "question": "What is the formula for the area of a circle?",
      "subject": "Mathematics",
      "topic": "Geometry",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "2a58a9b7-0c71-47a5-8f24-0764796dfc2a",
      "question": "What is the powerhouse of the cell?",
      "subject": "Biology",
      "topic": "Cell Biology",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "1cfe2cea-a513-49c5-9dc0-06282ef95d6b",
      "question": "Who wrote '1984'?",
      "subject": "Literature",
      "topic": "Modern Classics",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "75ebd4a5-7560-4fc3-9c8f-27e4c61af650",
      "question": "What is the largest planet in our solar system?",
      "subject": "Astronomy",
      "topic": "Planets",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "2dd0188c-9830-4049-95aa-b12581f6f1fe",
      "question": "Who painted the Mona Lisa?",
      "subject": "Art",
      "topic": "Renaissance Art",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "4c914a8b-986f-440f-843c-7b627539913e",
      "question": "What is the chemical symbol for gold?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "ab62eb71-1d59-4d8f-af7b-6353d3476df5",
      "question": "What is the longest river in the world?",
      "subject": "Geography",
      "topic": "Rivers",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "a7bdf809-7bec-409d-a2e4-a659cc24bc15",
      "question": "Who developed the theory of relativity?",
      "subject": "Physics",
      "topic": "Modern Physics",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "0dabdf9d-df00-4195-a7ab-cec9925be745",
      "question": "What is the main function of the kidneys?",
      "subject": "Biology",
      "topic": "Human Anatomy",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "4571d78d-9a86-4e15-82b2-4549f2824c2b",
      "question": "Who is the Greek god of the sea?",
      "subject": "Mythology",
      "topic": "Greek Mythology",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "df502149-0cd7-46fa-99f3-e4154893db7a",
      "question": "What is the capital of Australia?",
      "subject": "Geography",
      "topic": "World Capitals",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "c88dec95-b6c8-465d-a89b-a6fded95e8e4",
      "question": "Who composed the 'Moonlight Sonata'?",
      "subject": "Music",
      "topic": "Classical Music",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "2a3e7c57-4f2f-4085-96f0-28bae4574eab",
      "question": "What is the smallest prime number?",
      "subject": "Mathematics",
      "topic": "Numbers",
      "difficulty": "Easy",
      "marks": 4
    },
    {
      "id": "7e454fb6-5ea8-4e28-930f-9ec58c0fae59",
      "question": "Who wrote 'To Kill a Mockingbird'?",
      "subject": "Literature",
      "topic": "American Classics",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "cd78058a-f39a-4779-bd26-3101cefb015d",
      "question": "What is the formula for calculating work?",
      "subject": "Physics",
      "topic": "Work and Energy",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "0121df2f-401b-4066-aba4-0b4e17d54cef",
      "question": "What is the process of plants making their food called?",
      "subject": "Biology",
      "topic": "Photosynthesis",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "6f131790-9a75-4828-9f1d-38d580a5b3ae",
      "question": "Who is the protagonist in 'The Great Gatsby'?",
      "subject": "Literature",
      "topic": "American Classics",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "73275094-229e-4d60-8338-2ab6072ccb41",
      "question": "Which country is known as the Land of the Rising Sun?",
      "subject": "Geography",
      "topic": "Countries",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "8cc6acc8-9682-4ce8-b177-8415c476cc30",
      "question": "What is the largest ocean on Earth?",
      "subject": "Geography",
      "topic": "Oceans",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "89135bfe-2289-4149-bf3d-93288c819b5e",
      "question": "Who is credited with inventing the telephone?",
      "subject": "History",
      "topic": "Inventions",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "ebdf734f-eaf5-41cb-aec4-0dd8514f151a",
      "question": "What is the currency of Japan?",
      "subject": "Economics",
      "topic": "Currency",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "5dd62a6a-75f2-4607-bda4-9bcb3760a746",
      "question": "Who discovered penicillin?",
      "subject": "Medicine",
      "topic": "Medical Discoveries",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "da78c481-6d44-4358-81e8-45359efce65b",
      "question": "What is the largest desert in the world?",
      "subject": "Geography",
      "topic": "Deserts",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "2d42e786-90dc-42cf-b7ff-eca04b00515b",
      "question": "Who painted the 'Starry Night'?",
      "subject": "Art",
      "topic": "Impressionism",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "6b02a7d3-c823-4986-86f2-1618229820ac",
      "question": "What is the process of converting water vapor to liquid called?",
      "subject": "Science",
      "topic": "States of Matter",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "f71281f2-dd24-465d-afb8-07b69ce80046",
      "question": "Which planet is known as the 'Red Planet'?",
      "subject": "Astronomy",
      "topic": "Planets",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "4cee158e-0026-4447-874d-d8b6cd83af8f",
      "question": "Who wrote 'The Iliad'?",
      "subject": "Literature",
      "topic": "Classics",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "cfa09722-f040-4abf-add0-f68734e43d8c",
      "question": "What is the largest mammal?",
      "subject": "Biology",
      "topic": "Animals",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "50590a88-156c-4dc9-8a5f-0ecb3ab3ccac",
      "question": "Who founded Microsoft?",
      "subject": "Technology",
      "topic": "Tech Companies",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "b3785fb0-2c6e-453a-8e0d-f4f51710a8f3",
      "question": "What is the chemical symbol for silver?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "896f09d8-d4e4-45d8-92d1-d87913616e8d",
      "question": "What is the study of earthquakes called?",
      "subject": "Geology",
      "topic": "Seismology",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "e61028d9-7af9-4132-853f-234f9034f6ea",
      "question": "Who directed the movie 'Inception'?",
      "subject": "Film",
      "topic": "Directors",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "d07de35b-d97b-4438-8784-2a130a696ae7",
      "question": "Which gas do plants primarily use during photosynthesis?",
      "subject": "Biology",
      "topic": "Photosynthesis",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "024e39c6-8c34-447d-8f22-c1e8e2bad6ef",
      "question": "Who composed the 'Four Seasons'?",
      "subject": "Music",
      "topic": "Classical Music",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "7a349c9e-2b25-4e66-a65d-2cb67af48805",
      "question": "What is the study of the universe called?",
      "subject": "Astronomy",
      "topic": "Cosmology",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "d053cd6d-f54d-4c6c-91e9-075c1faa62fc",
      "question": "What is the primary function of mitochondria?",
      "subject": "Biology",
      "topic": "Cell Biology",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "0db9463c-3371-41dc-ad12-4917b490bc12",
      "question": "Who painted the 'Mona Lisa'?",
      "subject": "Art",
      "topic": "Renaissance Art",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "b1cd3ebf-4286-4ca0-b762-e7963d5d9479",
      "question": "What is the study of heredity called?",
      "subject": "Biology",
      "topic": "Genetics",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "138f67eb-ca57-40c1-8381-ae740245c67b",
      "question": "Who is known as the 'Father of Modern Physics'?",
      "subject": "Physics",
      "topic": "Scientists",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "59050dd2-9460-47ce-8138-f9bdb767bd1d",
      "question": "What is the boiling point of water in Celsius?",
      "subject": "Science",
      "topic": "States of Matter",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "0a11a844-5576-42fe-828d-7afaecbefd9f",
      "question": "Who invented the telephone?",
      "subject": "History",
      "topic": "Inventions",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "bda7e0f1-8dae-4b8f-b67c-6d61ccca13a1",
      "question": "What is the largest ocean in the world?",
      "subject": "Geography",
      "topic": "Oceans",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "df8ce9cf-c167-482f-b165-c82382ee9035",
      "question": "Who wrote 'The Great Gatsby'?",
      "subject": "Literature",
      "topic": "American Classics",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "9e83ed55-4e1d-43cf-836c-2dace43eef95",
      "question": "What is the formula for calculating work?",
      "subject": "Physics",
      "topic": "Work and Energy",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "e86d9adc-ccb8-4d13-be53-d1e18dea2ad1",
      "question": "What is the process of plants making their food called?",
      "subject": "Biology",
      "topic": "Photosynthesis",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "3c7d02e4-dc5a-45d2-b8b1-a63ad69a1b9e",
      "question": "Who is the protagonist in 'The Great Gatsby'?",
      "subject": "Literature",
      "topic": "American Classics",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "dc179245-6d9d-431b-97cd-b0e70fc0a1bd",
      "question": "Which country is known as the Land of the Rising Sun?",
      "subject": "Geography",
      "topic": "Countries",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "a9f26e0b-4278-4c9d-94d8-c5e2c2d93c72",
      "question": "What is the largest ocean on Earth?",
      "subject": "Geography",
      "topic": "Oceans",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "8d4ae8bb-afbf-4dce-9c2f-ad504b5b5287",
      "question": "Who is credited with inventing the telephone?",
      "subject": "History",
      "topic": "Inventions",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "7af45e86-a0ae-41b9-b360-b7f44e43be61",
      "question": "What is the currency of Japan?",
      "subject": "Economics",
      "topic": "Currency",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "179bcc27-9afc-4a1e-97da-3459951d7a44",
      "question": "Who discovered penicillin?",
      "subject": "Medicine",
      "topic": "Medical Discoveries",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "a45c9c2f-094f-4c5d-ac7f-d2f3182ada13",
      "question": "What is the largest desert in the world?",
      "subject": "Geography",
      "topic": "Deserts",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "acda9670-fbe4-48df-a0b3-4abb25fe19ec",
      "question": "Who painted the 'Starry Night'?",
      "subject": "Art",
      "topic": "Impressionism",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "e8578993-a150-4b71-8d2e-04f9f9b31645",
      "question": "What is the process of converting water vapor to liquid called?",
      "subject": "Science",
      "topic": "States of Matter",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "e2170294-983a-4428-84c8-4fa0393564dc",
      "question": "Which planet is known as the 'Red Planet'?",
      "subject": "Astronomy",
      "topic": "Planets",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "ffc560bf-cafc-4fa8-be83-0b18e3da428b",
      "question": "Who wrote 'The Iliad'?",
      "subject": "Literature",
      "topic": "Classics",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "44a815a7-856e-41aa-98b4-8cebbace2578",
      "question": "What is the largest mammal?",
      "subject": "Biology",
      "topic": "Animals",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "8bbd2a08-9fc2-4c35-a500-e334c3488e6a",
      "question": "Who founded Microsoft?",
      "subject": "Technology",
      "topic": "Tech Companies",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "f7005eee-2ff3-4534-b28c-7058b00972f3",
      "question": "What is the chemical symbol for silver?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "e5977149-43bc-436f-86a8-20b1d856ca29",
      "question": "What is the study of earthquakes called?",
      "subject": "Geology",
      "topic": "Seismology",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "5b677721-57c4-4db1-811e-133229d72da9",
      "question": "Who directed the movie 'Inception'?",
      "subject": "Film",
      "topic": "Directors",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "df75267a-b615-4bb6-83f7-beab3a4120eb",
      "question": "Which gas do plants primarily use during photosynthesis?",
      "subject": "Biology",
      "topic": "Photosynthesis",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "ca72d85e-5867-43a5-a068-74ace4f137b3",
      "question": "Who composed the 'Four Seasons'?",
      "subject": "Music",
      "topic": "Classical Music",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "afcb32cb-d5a0-474e-afe0-600945ccad73",
      "question": "What is the study of the universe called?",
      "subject": "Astronomy",
      "topic": "Cosmology",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "a290375d-d112-49ac-88ac-5902c08b0212",
      "question": "What is the primary function of mitochondria?",
      "subject": "Biology",
      "topic": "Cell Biology",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "eae7dc7c-7554-4f8d-be0c-c04701fb623c",
      "question": "Who painted the 'Mona Lisa'?",
      "subject": "Art",
      "topic": "Renaissance Art",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "2f469f23-5b7b-4592-b758-1853fbf2ce77",
      "question": "What is the study of heredity called?",
      "subject": "Biology",
      "topic": "Genetics",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "2bba2db4-f859-4111-9caa-a09fa43b8345",
      "question": "Who is known as the 'Father of Modern Physics'?",
      "subject": "Physics",
      "topic": "Scientists",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "dbed4e3d-483c-45a6-8f15-e34ef530023a",
      "question": "What is the boiling point of water in Celsius?",
      "subject": "Science",
      "topic": "States of Matter",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "b1d4ddeb-ea78-4a50-ba25-e64dc10517dd",
      "question": "Who invented the telephone?",
      "subject": "History",
      "topic": "Inventions",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "6e80e494-75c4-4876-b8d5-08781877e637",
      "question": "What is the largest ocean in the world?",
      "subject": "Geography",
      "topic": "Oceans",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "fe4996f5-6519-468a-9ab9-44f4745df15a",
      "question": "Who wrote 'The Great Gatsby'?",
      "subject": "Literature",
      "topic": "American Classics",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "fc99aa60-f7d5-4f73-9ea0-4ac6ee0a119c",
      "question": "What is the formula for the area of a circle?",
      "subject": "Mathematics",
      "topic": "Geometry",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "6fda466f-19a0-42b1-b5c1-eac29427f3ce",
      "question": "What is the powerhouse of the cell?",
      "subject": "Biology",
      "topic": "Cell Biology",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "19226449-7ab5-4b13-bb8a-7a5b74ffac99",
      "question": "What is the capital of Brazil?",
      "subject": "Geography",
      "topic": "World Capitals",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "6c3d5bba-1b9d-4562-95ea-27d086ccbdb6",
      "question": "Who wrote the play 'Hamlet'?",
      "subject": "Literature",
      "topic": "Shakespearean Plays",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "0f7ae809-8f5e-4ebe-bdd4-587315476ae5",
      "question": "What is the chemical symbol for iron?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "2f721aff-25b1-4ef4-bab6-bed394ba2411",
      "question": "Who painted 'The Persistence of Memory'?",
      "subject": "Art",
      "topic": "Surrealism",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "52596a90-b0cf-464b-b429-05f8a96e71c9",
      "question": "What is the process of a caterpillar becoming a butterfly called?",
      "subject": "Biology",
      "topic": "Life Cycles",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "459cc1dd-7387-4cc9-80d6-a2b573fac09f",
      "question": "Who is the first female Prime Minister of the United Kingdom?",
      "subject": "History",
      "topic": "Political Leaders",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "e7784caa-6cae-4467-9e29-a06be99c97a7",
      "question": "What is the chemical formula for water?",
      "subject": "Chemistry",
      "topic": "Chemical Compounds",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "2cf0f12e-78d6-49b1-ab6e-e87680b76823",
      "question": "Who composed 'The Marriage of Figaro'?",
      "subject": "Music",
      "topic": "Classical Music",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "da0591b7-1d88-4c58-b1bc-47fd6f8b1388",
      "question": "What is the study of the Earth's atmosphere called?",
      "subject": "Science",
      "topic": "Atmospheric Science",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "bbcf4ca2-dc8c-47eb-8f89-d3db26720e2c",
      "question": "Who is the creator of the theory of evolution by natural selection?",
      "subject": "Biology",
      "topic": "Evolution",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "1b67001e-98f9-44d3-af36-93455af19fdd",
      "question": "What is the largest moon in the solar system?",
      "subject": "Astronomy",
      "topic": "Moons",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "d61d9e8b-8aab-4a15-94f7-23f37e151b0f",
      "question": "Who is the author of 'The Catcher in the Rye'?",
      "subject": "Literature",
      "topic": "Modern Classics",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "74c2e472-7f55-4063-b3f0-e80da8cfa9a0",
      "question": "What is the chemical symbol for potassium?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "134fa6a4-334f-4bd4-9fe2-7a1ecdd5b5bf",
      "question": "Who painted 'The Scream'?",
      "subject": "Art",
      "topic": "Expressionism",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "b58a97ac-aec5-45c6-9a08-3793a1faab89",
      "question": "What is the process of a caterpillar becoming a butterfly called?",
      "subject": "Biology",
      "topic": "Life Cycles",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "24f03df2-755e-4a80-86c9-c77dc877932a",
      "question": "Who was the first female Prime Minister of India?",
      "subject": "History",
      "topic": "Political Leaders",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "3b94f1a3-d194-444f-85b6-68fef68dc5a4",
      "question": "What is the chemical formula for ammonia?",
      "subject": "Chemistry",
      "topic": "Chemical Compounds",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "774373ac-c280-495a-9b5f-da8b85f03035",
      "question": "Who composed 'Swan Lake'?",
      "subject": "Music",
      "topic": "Classical Music",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "e7657401-50e6-48dd-80ab-721815eb7c36",
      "question": "What is the study of weather called?",
      "subject": "Meteorology",
      "topic": "Weather Science",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "936d122c-5994-41bf-a6a5-3e44abf75059",
      "question": "Who proposed the theory of natural selection?",
      "subject": "Biology",
      "topic": "Evolution",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "c419b2d1-b3c2-47e0-813e-d5bc17f22176",
      "question": "What is the largest volcano in the solar system?",
      "subject": "Astronomy",
      "topic": "Volcanoes",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "61e558c3-a628-453e-8b82-c63572b48ebc",
      "question": "Who wrote 'Moby-Dick'?",
      "subject": "Literature",
      "topic": "Classic Novels",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "ce82d984-3e60-449f-a5b9-26cfc38da509",
      "question": "What is the chemical symbol for sodium?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "3e496b16-8669-441e-b38f-d1e0bc57b754",
      "question": "What is the chemical symbol for mercury?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "6c286aac-d33b-475e-96fd-f28f10ec8582",
      "question": "Who painted 'The Last Supper'?",
      "subject": "Art",
      "topic": "Renaissance Art",
      "difficulty": "Hard",
      "marks": 9
    },
    {
      "id": "b2220cbf-ee39-4b65-8a8c-f10c256fef38",
      "question": "What is the process of a tadpole becoming a frog called?",
      "subject": "Biology",
      "topic": "Metamorphosis",
      "difficulty": "Medium",
      "marks": 7
    },
    {
      "id": "f1d60454-9d30-43c1-853c-369f4b8e0230",
      "question": "Who was the first person to orbit the Earth?",
      "subject": "Space Exploration",
      "topic": "Astronauts",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "1370d0d9-02b1-4ef1-99ac-177e8921c77f",
      "question": "What is the chemical formula for hydrogen peroxide?",
      "subject": "Chemistry",
      "topic": "Chemical Compounds",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "8f8ef3ae-b908-40c8-a83c-79322a58eaed",
      "question": "Who composed 'The Magic Flute'?",
      "subject": "Music",
      "topic": "Classical Music",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "9e5ec30b-e5c0-436d-8e9e-f2d419e259ec",
      "question": "What is the study of the Earth's climate called?",
      "subject": "Climatology",
      "topic": "Climate Science",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "85dd4650-1a1d-4d09-88f9-21109ca66720",
      "question": "What is the highest mountain in the world?",
      "subject": "Geography",
      "topic": "Mountains",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "0b716d16-2601-457c-988b-fa5b32c4ee68",
      "question": "What is the world's longest river?",
      "subject": "Geography",
      "topic": "Rivers",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "50ad537c-0416-48ea-944f-549be74c0d6a",
      "question": "What is the name of the world's largest ocean?",
      "subject": "Geography",
      "topic": "Oceans",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "5efe7db9-0a6b-4bf2-a0b9-a075026f6677",
      "question": "Who painted 'The Starry Night'?",
      "subject": "Art",
      "topic": "Post-Impressionism",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "7573f893-74f6-4aaa-bb25-f5b2cb571dbc",
      "question": "What is the speed of light?",
      "subject": "Physics",
      "topic": "Speed of Light",
      "difficulty": "Hard",
      "marks": 10
    },
    {
      "id": "391d6840-174c-4918-b7ab-3b2deafc6d3c",
      "question": "Who wrote 'War and Peace'?",
      "subject": "Literature",
      "topic": "Classic Novels",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "221913c5-b030-4c9c-91eb-fb6d2572b067",
      "question": "What is the atomic number of helium?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 6
    },
    {
      "id": "019eb6a4-985f-4f78-9c6d-6deeab6519f7",
      "question": "Who invented the World Wide Web?",
      "subject": "Computer Science",
      "topic": "Inventions",
      "difficulty": "Medium",
      "marks": 8
    },
    {
      "id": "5998ee77-e56b-4dea-b7f0-c689a93fab0b",
      "question": "What is the formula for water?",
      "subject": "Chemistry",
      "topic": "Chemical Compounds",
      "difficulty": "Easy",
      "marks": 5
    },
    {
      "id": "958be173-a066-4d42-b73f-28512a3118fc",
      "question": "What is the chemical symbol for oxygen?",
      "subject": "Chemistry",
      "topic": "Elements",
      "difficulty": "Easy",
      "marks": 6
    }
  ];
     module.exports = { data: sampleListings };