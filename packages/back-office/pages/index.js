import React from "react";
import Head from "next/head";

import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false }
  }
};

const CustomTitleField = ({title, required, ...props}) => {
  console.log(props)
  const legend = required ? title + '*' : title;
  return <div id="custom">{legend}</div>;
};

const fields = {
  TitleField: CustomTitleField
};

const uiSchema = {
  title: {
    classNames: "task-title foo-bar"
  }
};

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/static/favicon.ico" importance="low" />
      </Head>

      <div>
        <h1 className="text-xl text-blue-500 text-center mt-10">Testing react json schema!</h1>

        <Form
          schema={schema}
          uiSchema={uiSchema}
          fields={fields}
          onChange={() => console.log("changed")}
          onSubmit={({formData}) => console.log("submitted", formData)}
          onError={() => console.log("errors")}
        />
      </div>
    </div>
  );
};

export default Home;
