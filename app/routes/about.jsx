export const meta = () => {
    return [{ title: "About" }];
  };

    export default function About() {
      return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <h1>About</h1>
          <p>
            This is a Remix app. There are many like it, but this one is mine.
          </p>
        </div>
      );
    }