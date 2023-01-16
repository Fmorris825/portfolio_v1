import {
  MailOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import MorrisDeltaRealty from "../../pages/MorrisDeltaRealty/MorrisDeltaRealty";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Who is Fredrick Morris?", "/"),

  getItem("Projects", "sub2", <AppstoreAddOutlined />, [
    getItem("Morris Delta Realty", "/Morris Delta Realty"),
    getItem("Youtube Clone", "/Youtube Clone"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const SideMenu = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };
  return (
    <Menu
      className="sideNav"
      onClick={onClick}
      style={{
        width: 256,
        boxShadow: "3px 3px 4px 4px grey",
        height: "50%",
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default SideMenu;
