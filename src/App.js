import React, { useEffect } from "react";

import Editor, { useMonaco } from "@monaco-editor/react";

function App() {
  const monaco = useMonaco();

  useEffect(() => {
    // do conditional chaining
    // monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  return (
    <Editor
      height="90vh"
      defaultValue="# some comment"
      defaultLanguage="python"
    />
  );
}

export default App;
