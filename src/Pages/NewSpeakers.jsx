/** @format */

const NewSpeakerCard = ({ item }) => {
    return (
        <div
            className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
            <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden shadow-md">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
                {item.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{item.des}</p>
            <div className="mt-4 flex items-center justify-center space-x-3">
                {item.logo && (
                    <img src={item.logo} alt={`${item.company} logo`} className="h-6 w-6 object-contain" loading="lazy" />
                )}
                <h1 className="text-sm font-medium text-gray-700">{item.company}</h1>
            </div>
            <div
                className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg">
            </div>
        </div>
    );
};


const NewSpeakers = () => {
    const newSpeakers = [
        {
            name: "Karun Gaur",
            image: "./new_speakers/karun_gaur.jpg",
            des: "Vice President",
            company: "Dr. Reddy's Laboratories",
            logo: "./new_speakers/dr_reddy_lab.png",
        },
        {
            name: "Dr. Sadanand Kulkarni",
            image: "./new_speakers/sadanand_kulkarni.jpg",
            des: "Head-Medical, Regulatory, Quality, Vigilance",
            company: "Fresenius Kabi South Asia",
            logo:"./new_speakers/fresenius_kabi.png",

        },
        {
            name: "Avinash Narwaria",
            image: "./new_speakers/avinash_narwaria.jpg",
            des: "Ex-VP",
            company: "Emami",
            logo: "./new_speakers/emami.png",
        },
        {
            name: "Dr. Rajiv Desai",
            image: "./new_speakers/rajiv_desai.jpg",
            des: "Senior Technical Advisor",
            company: "IPA",
            logo: "./new_speakers/ipa.png",
        },
        {
            name: "Dr. Saurabh Kumar",
            image: "./new_speakers/saurabh_kumar.jpeg",
            des: "Principal & Head RWE",
            company: "IQVIA",
            logo: "./new_speakers/iqvia_logo.jpeg",
        },
        {
            name: "Dr. Anand Agarwal",
            image: "./new_speakers/anand_agarwal.jpg",
            des: "Senior Vice President",
            company: "Cipla",
            logo: "./new_speakers/cipla_logo.jpeg",
        },
        {
            name: "Dr. P. A. Sivakumar",
            image: "./new_speakers/dr_pa_sivakumar.jpg",
            des: "Vice President",
            company: "Biological E. Limited",
            logo: "./new_speakers/biological_e_logo.jpeg",
        },
        {
            name: " Nitesh Kumar",
            image: "./new_speakers/nitesh_kumar.jpg",
            des: "Co-Founder",
            company: "Leumas",
            logo: "./new_speakers/leumasware_logo.jpeg",
        }
    ];

    return (
        <div id="speakers" className="py-16 ">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-sky-600 text-center mb-12">
                    New Speakers
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newSpeakers.map((item, index) => (
                        <NewSpeakerCard item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewSpeakers;