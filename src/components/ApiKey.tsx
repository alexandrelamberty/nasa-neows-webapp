import { Button, Form } from "semantic-ui-react";

export const ApiKey = () => {
  return (
    <Form>
      <Form.Field>
        <label>API Key</label>
        <input placeholder="API Key" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
