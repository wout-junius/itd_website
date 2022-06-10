import { Button, Input, Tooltip } from "antd";

import { EyeOutlined } from "@ant-design/icons";
import React from "react";

export default function ApiKeyShowcase(props: ApiKeyShowcaseProps) {
    
  const [reveal, setReveal] = React.useState(true);
  const { apiKey } = props
  return (
    <Input.Group compact>
      <Input value={apiKey} type={reveal? "password" : "text"} style={{ width: 'calc(100% - 50px)', outline: 'none' }} disabled />
      <Tooltip title="reveal key">
        <Button icon={<EyeOutlined />} onClick={() => setReveal(!reveal)} />
      </Tooltip>
    </Input.Group>
  );
}

interface ApiKeyShowcaseProps {
    apiKey: string;
}