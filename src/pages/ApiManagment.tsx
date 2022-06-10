import { Button, Form, Input, Modal, notification } from "antd";
import React from "react";
import { KeyOutlined } from "@ant-design/icons";
import ApiKeyTable from "../components/ApiManagment/ApiKeyTable";
import { ApiKey } from "../Entities/api-key.entity";

export default function ApiManagment() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [dataSource, setDataSource] = React.useState<ApiKey[]>(temp);
  const [isCreate, setIsCreate] = React.useState<boolean>(true);
  const [selectedKey, setSelectedKey] = React.useState<string>("");
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const footer = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            setIsCreate(true);
            form.resetFields();
            showModal();
          }}
        >
          Create new key <KeyOutlined />{" "}
        </Button>
      </div>
    );
  };

  const deleteKey = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const createKey = (event: any) => {
    const typedEvent = event as { keyName: string }
    const key: ApiKey = {
      key: uuid(),
      name: typedEvent.keyName,
      usage: 0,
      active: false,
    };

    setDataSource([...dataSource, key]);
    setIsModalVisible(false);
    form.resetFields();
    notification["success"]({
      message: 'Successfully created new key whit name: ' + typedEvent.keyName,
    });
  };

  const updateKey = (values: any) => {
    const typedValues = values as { keyName: string }
    dataSource.find((item) => item.key === selectedKey)!.name = typedValues.keyName;
    setDataSource(dataSource);
    setIsModalVisible(false);
    setSelectedKey("");
    form.resetFields();
  };

  
  return (
    <>
      <div className="background">
        <div className="content">
          <ApiKeyTable
            dataSource={dataSource}
            footer={footer}
            onDelete={deleteKey}
            onEdit={(key: string) => {
              setIsCreate(false);
              form.resetFields();              
              form.setFieldsValue({
                keyName: dataSource.find((item) => item.key === key)!.name,
              });
              setSelectedKey(key);
              showModal();
            }}
          />
        </div>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button form="createKey" key="submit" htmlType="submit">
            Create
          </Button>,
        ]}
      >
        <Form id="createKey" onFinish={isCreate ? createKey : updateKey} requiredMark form={form}>
          <Form.Item
            name="keyName"
            label="Key name"
            rules={[{ required: true, message: "Please input a name!" }]}
          >
            <Input
              type="text"
              placeholder="Enter the name"
              name="keyNameInput"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

const temp: ApiKey[] = [
  {
    key: "c0ea4037-01c6-40af-a76f-1bd949542c6d",
    name: "Android app",
    active: true,
    usage: 403,
  },
  {
    key: "414f7032-5b4e-420f-a73c-0d72ebb36fd3",
    name: "web app",
    active: true,
    usage: 10300,
  },
  {
    key: "8b45c0b0-f683-4562-aee7-052067990fc5",
    name: "desktop app",
    active: false,
    usage: 200,
  },
  {
    key: "137d3e36-9513-46e6-9497-2d4c9577be13",
    name: "desktop app",
    active: false,
    usage: 200,
  },
  {
    key: "16b931d6-239a-487a-8dfd-1e83275e29f9",
    name: "desktop app",
    active: false,
    usage: 200,
  },
  {
    key: "750ae609-593e-4dce-88d1-a5a227c8cbba",
    name: "desktop app",
    active: false,
    usage: 200,
  },
  {
    key: "eb6a810b-9c76-4458-b818-de8bfb4144bc",
    name: "desktop app",
    active: false,
    usage: 200,
  },
];

//Temp
const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
