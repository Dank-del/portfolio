import { TypeAnimation } from 'react-type-animation';

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-4xl font-mono">
          <TypeAnimation
            sequence={[
              'Landing..',
              1000,
              '$ctx.getMe();',
              1000,
              'Sayan',
              4000,
              () => {
                console.log('Done typing!'); // Place optional callbacks anywhere in the array
              },
            ]}
            className="m-0 flex flex-center nav_h1"
            wrapper="h1"
            cursor={true}
            repeat={0}
          />
        </a>
      </div>
    </div>
  );
}
