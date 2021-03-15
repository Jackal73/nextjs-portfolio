import {languages, tools} from "../data";
import Bar from "../components/Bar";

const resume = () => {
    return(
        <div className="px-6 py-2">
            {/* Education & Experience */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h5 className="my-3 text-2xl font-extrabold">Education</h5>
                    <div>
                        <h5 className="mt-4 text-xl font-extrabold">Web Technologies-Development</h5>
                        <p className="font-bold"><span className="text-green">||</span> SouthWestern Illinois College (2019-2021)</p>
                        <p className="my-1 italic text-blue-400">(Southern Illinois University - Edwardsville)</p>
                    </div>
                    <div>
                        <h5 className="mt-2 text-xl font-extrabold">Computer Science Engineering</h5>
                        <p className="font-bold mb-1"><span className="text-green">||</span> SouthWestern Illinois College (&rarr; 2015)</p>
                        <p className="my-1 italic text-blue-400">(Missouri University of Science & Technology)</p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-extrabold">Experience</h5>
                    <div>
                        <h5 className="mt-4 text-xl font-extrabold"> Full-Stack Web & Mobile Applications Developer</h5>
                        <p className="font-bold"><span className="text-green">||</span> kblDesigners (2019 &rarr;)</p>
                        <p className="my-1 italic text-blue-400">Created kblDesigners to revolutionize Full Stack Web & Mobile Development</p>
                    </div>
                    <div>
                        <h5 className="mt-2 text-xl font-extrabold"> Web Designer</h5>
                        <p className="font-bold mb-1"><span className="text-green">||</span> kblDevelopers (2017-March2021)</p>
                        <p className="my-1 italic text-blue-400">Front-end development with breathtaking UI designs.</p>
                    </div>
                </div>
            </div>

            {/* Languages & Tools */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-extrabold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {languages.map(language => (
                            <Bar data={language} key={language.name} />
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-extrabold">Tools & Software</h5>
                    <div className="my-2">
                        {tools.map(tool => (
                            <Bar data={tool} key={tool.name} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resume
