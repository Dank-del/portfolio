import './App.css';
import NavBar from './components/NavBar';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import getGh from './lib/getGh';
import Card from './components/Card';

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
      <div className="m-5 flex flex-col flex-center">
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
        <h2 className="text-4xl font-mono">My Projects</h2>
        {repos && (
          <div className="grid grid-rows-2 grid-flow-col gap-2 mt-4">
            {repos.map((repo) => {
              return (
                <Card
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
  );
}

export default App;
