import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AppContext } from "../providers/AppContextProvider";

export const ApiKeyModalForm = () => {
  const { show, setShow, apiKey, saveApiKey, resetApiKey } =
    useContext(AppContext);

  // Internal state for the input
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    setKey(apiKey);
  }, [show]);

  const reset = () => {
    resetApiKey();
    setShow(!show);
  };

  const close = () => {
    setKey("");
    setShow(!show);
  };

  const save = () => {
    saveApiKey(key);
    setKey("");
    setShow(!show);
  };

  return (
    <Modal size="small" open={show} onClose={() => close()}>
      <Modal.Header>Use your API key</Modal.Header>
      <Modal.Content>
        <p>
          You can get a key at <a>https://api.nasa.gov/</a>
        </p>
        <Form>
          <Form.Field>
            <label>API Key</label>
            <input
              placeholder="API Key"
              value={key}
              onChange={(event) => {
                setKey(event.target.value);
              }}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Content>
        <p>
          Your API key is stored in your{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
            localStorage.
          </a>
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Button>
        <Button primary onClick={() => close()}>
          Cancel
        </Button>
        <Button positive onClick={() => save()}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
