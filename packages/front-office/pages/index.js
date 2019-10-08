import React, { useState } from "react";
import Head from "next/head";
import { Button, Text, ToggleWithText } from "ui";
import css from "styled-jsx/css";
import classnames from "classnames";

import "../style.css";

const styles = css.resolve`
  .buttonContainer {
    @apply text-blue-900;
  }

  .buttonContent {
    @apply text-red-500;
  }
`;

const Home = () => {
  const [checked, setChecked] = useState(true);

  const scopedCss = styles.className;

  return (
    <div className="hero">
      <Head>
        <title>Front Office</title>
        <link rel="icon" href="/static/favicon.ico" importance="low" />
      </Head>

      <div className="px-10">
        <h1 className="text-xl text-blue-500 text-center mt-10">
          Front Office
        </h1>
        <section>
          <Button>Regular Button</Button>
          <Button
            classes={{
              button: classnames(scopedCss, "buttonContainer", "ml-10"),
              content: classnames(scopedCss, "buttonContent")
            }}
          >
            Custom button
          </Button>
        </section>
        <section>
          <Text text="Regular text" />
          <Text
            text="Custom text with hover class"
            classes={{ text: "hover:text-red-900 mx-2" }}
          />
        </section>
        <section className="my-10">
          <ToggleWithText
            id="toggle-with-text"
            value={checked}
            onChange={event => setChecked(event.target.checked)}
            checkedText="Toggle On"
            unCheckedText="Toggle Off"
          />
        </section>
      </div>
      {styles.styles}
      <style jsx>{`
        .hero {
          @apply p-2;
        }
      `}</style>
    </div>
  );
};

export default Home;
