import './App.css';
import NavBar from './components/NavBar';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import getGh from './lib/getGh';
import Card from './components/Card';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const startup = async () => {
      const repos = await getGh();
      console.log(repos);
      setRepos(repos);
    };
    startup();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="m-3 flex flex-col flex-center">
        <h1 className="mt-2 text-4xl mb-8">
          Hi, I am{' '}
          {
            <TypeAnimation
              sequence={[
                'a developer.',
                1000,
                'an innovator.',
                1000,
                'an open source contributor',
                1000,
                'Sayan.',
                4000,
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                },
              ]}
              className="font-mono font-semibold"
              wrapper="h1"
              cursor={false}
              repeat={2}
            />
          }
        </h1>
        <p className="text-xl main_para mb-3">
          I am a student developer from Kolkata, India. I am 20 years old and
          have been passionate about coding and creating projects for the past
          few years. I first started writing code in 2020 and have since then
          dedicated a lot of time and effort towards improving my skills and
          knowledge in the field. I am currently pursuing a degree in computer
          science, which has given me the opportunity to learn about various
          programming languages and technologies. In addition to my studies, I
          have also been actively involved in maintaining a number of open
          source projects that I have developed over the years. I am constantly
          seeking new challenges and opportunities to expand my skills and
          knowledge in the field of computer science and programming. I love the
          process of creating and building new projects, and I am always excited
          to learn and explore new technologies and ideas. Overall, I am a
          dedicated and hardworking individual with a strong passion for coding
          and making a positive impact through my work.
        </p>
        <div class="border border-violet-900 mt-2 mb-3" />
        <Skills />
        <div class="border border-violet-900 mt-2 mb-3" />
        {repos && <h2 className="text-4xl font-mono">My Projects</h2>}
        <div className="container mx-auto mt-4">
          {repos && (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-6">
              {repos.map((repo) => {
                return (
                  <Card
                    className="flex justify-center"
                    key={repo.id}
                    url={repo.svn_url}
                    repoName={repo.name}
                    repoDesc={repo.description}
                    language={repo.language}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
