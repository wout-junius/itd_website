import { Button, Form, Input, Modal, notification } from "antd";
import React, { useContext } from "react";
import { KeyOutlined } from "@ant-design/icons";
import ApiKeyTable from "../components/ApiManagment/ApiKeyTable";
import { ApiKey } from "../Entities/api-key.entity";
import { useQuery, useMutation } from "@apollo/client";
import {
  CREATE_API_KEY,
  DELETE_API_KEY,
  GET_USER_KEYS,
  UPDATE_API_KEY,
} from "../Graphql/ApiKeyQueries";
import { AuthContext } from "../context/AuthContext";

export default function ApiManagment() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [dataSource, setDataSource] = React.useState<ApiKey[]>();
  const [isCreate, setIsCreate] = React.useState<boolean>(true);
  const [selectedKey, setSelectedKey] = React.useState<string>("");
  const [form] = Form.useForm();
  const { loading, error, data } = useQuery(GET_USER_KEYS);
  const ctx = useContext(AuthContext);
  if(data && !dataSource) setDataSource(data.apiKey);
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
    deleteKeyMutation({ variables: { id: key } });
    setDataSource(dataSource!.filter((item) => item.key !== key));
  };

  const [deleteKeyMutation] = useMutation(DELETE_API_KEY, {
    onCompleted: () => {
      notification.success({
        message: "Success",
        description: "Key deleted successfully",
      });
    },
  });

  const createKey = (event: any) => {
    const typedEvent = event as { keyName: string };
    setIsModalVisible(false);
    if (ctx.user) {
      const logedUser = ctx.user as any;
      console.log(logedUser);
      createKeyMutation({
        variables: {
          createApikeyInput: {
            name: typedEvent.keyName,
            user_id: logedUser.sub,
          },
        },
      });
    }
  };

  const [createKeyMutation] = useMutation(CREATE_API_KEY, {
    onCompleted: (data) => {
      if (dataSource) {
        console.log(data.createApiKey);

        setDataSource([...dataSource, data.createApiKey]);
      } else {
        setDataSource([data.createApiKey.key]);
      }
      notification.success({
        message: "Success",
        description: "Key created successfully",
      });
    },
  });

  const updateKey = (values: any) => {
    const typedValues = values as { keyName: string };

    form.resetFields();
    updateKeyMutation({
      variables: {
        updateApiKeyInput: {
          key: selectedKey,
          name: typedValues.keyName,
        },
      },
    });
  };

  const [updateKeyMutation] = useMutation(UPDATE_API_KEY, {
    onCompleted: (data) => {      
      let tempData = dataSource;
      // console.log(tempData);
      // console.log(selectedKey);
      // console.log(data.updateApiKey);
      // tempData!.find((item) => item.key === selectedKey)!.name = data.updateApiKey.name
      setDataSource(tempData);
      setIsModalVisible(false);
      setSelectedKey("");
      notification.success({
        message: "Success",
        description: "Key created successfully",
      });
    },
  });

  return (
    <>
      <div className="background">
        <div className="content">
          <p>{error?.message}</p>
          <ApiKeyTable
            dataSource={dataSource}
            footer={footer}
            onDelete={deleteKey}
            onEdit={(key: string) => {
              setIsCreate(false);
              form.resetFields();
              form.setFieldsValue({
                keyName: dataSource?.find((item) => item.key === key)!.name,
              });
              setSelectedKey(key);
              showModal();
            }}
            loading={loading}
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
        <Form
          id="createKey"
          onFinish={isCreate ? createKey : updateKey}
          requiredMark
          form={form}
        >
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
