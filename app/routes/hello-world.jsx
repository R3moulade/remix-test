export const meta = () => {
    return [{ title: "Hello World" }];
  };

    export default function HelloWorld() {
      return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <h1>Hello world</h1>
          <p>
            This is a Remix app. There are many like it, but this one is mine.
          </p>
        </div>
      );
    }