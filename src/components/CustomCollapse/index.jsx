import { Collapse } from "antd";
import "./CustomCollapse.less";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export const CustomCollapse = ({ el }) => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      onChange={callback}
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
    >
      {el.questions.map((el, id) => {
        return (
          <Panel header="This is panel header 1 " key={id}>
            <p>{el.questions}</p>
          </Panel>
        );
      })}
    </Collapse>
  );
};
