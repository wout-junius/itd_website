import { Table, Button, Popconfirm } from "antd";
import Column from "antd/lib/table/Column";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { CSSProperties } from "react";
import ApiKeyShowcase from "./ApiKeyShowcase";
import { ApiKey } from "../../Entities/api-key.entity";

export default function ApiKeyTable(props: ApiKeyTableProps) {
  const { dataSource, footer, onDelete, onEdit } = props;
  return (
    <Table
      dataSource={dataSource}
      style={{ width: "100%" }}
      pagination={{
        hideOnSinglePage: true,
        pageSize: 5,
        position: ["bottomCenter"],
      }}
      footer={footer}
      loading={props.loading}
    >
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Usage" dataIndex="usage" key="usage" />
      <Column
        title="Active"
        dataIndex="active"
        key="active"
        render={(active: boolean) => {
          return active ? "Yes" : "No";
        }}
      />
      <Column
        title="Key"
        dataIndex="key"
        key="key"
        render={(key: string) => {
          return <ApiKeyShowcase apiKey={key} />;
        }}
      />
      <Column
        render={(_: any, record: ApiKey) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                icon={<EditOutlined />}
                type="primary"
                style={buttonStyle}
                onClick={() => onEdit(record.key)}
              />
              <Popconfirm
                title="Are you sure to delete this key?"
                onConfirm={() => onDelete(record.key)}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  icon={<DeleteOutlined />}
                  type="primary"
                  danger
                  style={buttonStyle}
                />
              </Popconfirm>
            </div>
          );
        }}
      />
    </Table>
  );
}

interface ApiKeyTableProps {
  dataSource?: ApiKey[];
  footer: any;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  loading: boolean;
}

const buttonStyle: CSSProperties = {
  marginRight: ".5rem",
};