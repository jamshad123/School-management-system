import React, { useState } from 'react';
import { MailOutlined, SettingOutlined, AppstoreOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { Col, Row } from 'antd'
import { SiOnlyoffice, SiMicrosoftacademic } from "react-icons/si";
import { BsFillPersonPlusFill, BsFillDiagram2Fill, BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaDollarSign, FaMoneyCheckAlt, FaWifi, FaMoneyCheck, FaBullhorn, FaDownload } from "react-icons/fa";
import { RiVidiconLine } from "react-icons/ri";
import { AiTwotoneGold, AiFillSetting } from "react-icons/ai";
import { MdOnlinePrediction, MdHomeWork, MdLibraryBooks, MdInventory } from "react-icons/md";
import { BsFillMapFill, BsBusFrontFill } from "react-icons/bs";
import { GiHumanPyramid, GiAlliedStar, GiThreeFriends } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { IoBook, IoHome } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import Navbar from './components/Navbar';




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
  getItem('Front Office', 'sub1', <SiOnlyoffice />, [
    getItem('Admission Enquiry', '1', <DoubleRightOutlined />),
    getItem('Visitor Book', '2', <DoubleRightOutlined />),
    getItem('Phone Call Log', '3', <DoubleRightOutlined />),
    getItem('Postal Dispatch', '4', <DoubleRightOutlined />),
    getItem('Postal Receive', '5', <DoubleRightOutlined />),
    getItem('Complain', '6', <DoubleRightOutlined />),
    getItem('Setup Front Office', '7', <DoubleRightOutlined />),

  ]),
  getItem('Student Information', 'sub2', <BsFillPersonPlusFill />, [
    getItem('Student Details', '8', <DoubleRightOutlined />),
    getItem('Student Admission', '9', <DoubleRightOutlined />),
    getItem('Online Admission', '10', <DoubleRightOutlined />),
    getItem('Disabled Students', '11', <DoubleRightOutlined />),
    getItem('Multi Class Students', '12', <DoubleRightOutlined />),
    getItem('Bulk Delete', '13', <DoubleRightOutlined />),
    getItem('Student Categories', '14', <DoubleRightOutlined />),
    getItem('Student House', '15', <DoubleRightOutlined />),
    getItem('Disable Reason', '16', <DoubleRightOutlined />),

  ]),
  getItem('Fees Collection', 'sub3', <FaRegMoneyBillAlt />, [
    getItem('Collect Fees', '17', <DoubleRightOutlined />),
    getItem('Offline Bank Payments', '18', <DoubleRightOutlined />),
    getItem('Search Fees Payment', '19', <DoubleRightOutlined />),
    getItem('Fees Master', '20', <DoubleRightOutlined />),
    getItem('Fees Group', '21', <DoubleRightOutlined />),
    getItem('Fees Type', '22', <DoubleRightOutlined />),
    getItem('Fees Discount', '23', <DoubleRightOutlined />),
    getItem('Fees Carry Forward', '24', <DoubleRightOutlined />),
    getItem('Fees Reminder', '25', <DoubleRightOutlined />),
  ]),

  getItem('Online Course', 'sub4', <MdOnlinePrediction />, [
    getItem('Online Course', '26', <DoubleRightOutlined />),
    getItem('Offline Payments', '27', <DoubleRightOutlined />),
    getItem('Course Category', '28', <DoubleRightOutlined />),
    getItem('Online Course Report', '29', <DoubleRightOutlined />),
    getItem('Setting', '30', <DoubleRightOutlined />),
  ]),

  getItem('Multi Branch', 'sub5', <AiTwotoneGold />, [
    getItem('Overview', '31', <DoubleRightOutlined />),
    getItem('Reporting', '32', <DoubleRightOutlined />),
    getItem('Setting', '33', <DoubleRightOutlined />),
  ]),

  getItem('Gmeet Live Classes', 'sub6', <RiVidiconLine />, [
    getItem('Live Classes', '34', <DoubleRightOutlined />),
    getItem('Live Meeting', '35', <DoubleRightOutlined />),
    getItem('Live Class Report', '36', <DoubleRightOutlined />),
    getItem('Setting', '37', <DoubleRightOutlined />),
    getItem('Live Meeting Report', '38', <DoubleRightOutlined />),
  ]),

  getItem('Zoom Live Classes', 'sub7', <RiVidiconLine />, [
    getItem('Live Classes', '39', <DoubleRightOutlined />),
    getItem('Live Meeting', '40', <DoubleRightOutlined />),
    getItem('Live Class Report', '41', <DoubleRightOutlined />),
    getItem('Setting', '42', <DoubleRightOutlined />),
    getItem('Live Meeting Report', '43', <DoubleRightOutlined />),
  ]),

  getItem('Behaviour Records', 'sub8', <BsFillDiagram2Fill />, [
    getItem('Assign Incidents', '44', <DoubleRightOutlined />),
    getItem('Incidents', '45', <DoubleRightOutlined />),
    getItem('Reports', '46', <DoubleRightOutlined />),
    getItem('Setting', '47', <DoubleRightOutlined />),
  ]),

  getItem('Income', 'sub9', <FaDollarSign />, [
    getItem('Add Income', '48', <DoubleRightOutlined />),
    getItem('Search Income', '49', <DoubleRightOutlined />),
    getItem('Income Head', '50', <DoubleRightOutlined />),
  ]),

  getItem('Expenses', 'sub10', <FaMoneyCheckAlt />, [
    getItem('Add Expense', '51', <DoubleRightOutlined />),
    getItem('Search Expense', '52', <DoubleRightOutlined />),
    getItem('Expense Head', '53', <DoubleRightOutlined />),
  ]),

  getItem('Examinations', 'sub11', <BsFillMapFill />, [
    getItem('Exam Group', '54', <DoubleRightOutlined />),
    getItem('Exam Schedule', '55', <DoubleRightOutlined />),
    getItem('Exam Result', '56', <DoubleRightOutlined />),
    getItem('Design Admit Card', '57', <DoubleRightOutlined />),
    getItem('Print Admit Card', '58', <DoubleRightOutlined />),
    getItem('Design Marksheet', '59', <DoubleRightOutlined />),
    getItem('Marks Grade', '60', <DoubleRightOutlined />),
    getItem('Marks Division', '61', <DoubleRightOutlined />),

  ]),

  getItem('Attendance', 'sub12', <BsFillCalendar2CheckFill />, [
    getItem('Student Attendance', '62', <DoubleRightOutlined />),
    getItem('Approve Leave', '63', <DoubleRightOutlined />),
    getItem('Attendance by leave', '64', <DoubleRightOutlined />),

  ]),

  getItem('Online Examinations', 'sub13', <FaWifi />, [
    getItem('Online Examination', '65', <DoubleRightOutlined />),
    getItem('Question Bank', '66', <DoubleRightOutlined />),

  ]),

  getItem('Academics', 'sub14', <SiMicrosoftacademic />, [
    getItem('Class Timetable', '67', <DoubleRightOutlined />),
    getItem('Teachers Timetable', '68', <DoubleRightOutlined />),
    getItem('Assign Class Teacher', '69', <DoubleRightOutlined />),
    getItem('Promote Students', '70', <DoubleRightOutlined />),
    getItem('Subject Group', '71', <DoubleRightOutlined />),
    getItem('Subject', '72', <DoubleRightOutlined />),
    getItem('Class', '73', <DoubleRightOutlined />),
    getItem('Sections', '74', <DoubleRightOutlined />),

  ]),

  getItem('Lesson plan', 'sub15', <FaMoneyCheck />, [
    getItem('Copy Old Lessons', '75', <DoubleRightOutlined />),
    getItem('Manage Lesson Plan', '76', <DoubleRightOutlined />),
    getItem('Manage Syllabus Status', '77', <DoubleRightOutlined />),
    getItem('Lesson', '78', <DoubleRightOutlined />),
    getItem('Topic', '79', <DoubleRightOutlined />),

  ]),

  getItem('Human Resource', 'sub16', <GiHumanPyramid />, [
    getItem('Staff Directory', '80', <DoubleRightOutlined />),
    getItem('Staff Attendance', '81', <DoubleRightOutlined />),
    getItem('Payroll', '82', <DoubleRightOutlined />),
    getItem('Approve Leave Request', '83', <DoubleRightOutlined />),
    getItem('Apply Leave', '84', <DoubleRightOutlined />),
    getItem('Leave Type', '85', <DoubleRightOutlined />),
    getItem('Teachers Rating', '86', <DoubleRightOutlined />),
    getItem('Department', '87', <DoubleRightOutlined />),
    getItem('Designation', '88', <DoubleRightOutlined />),
    getItem('Disabled Staff', '89', <DoubleRightOutlined />),

  ]),

  getItem('Communicate', 'sub17', <FaBullhorn />, [
    getItem('Notice Board', '90', <DoubleRightOutlined />),
    getItem('Send Email', '91', <DoubleRightOutlined />),
    getItem('Send SMS', '92', <DoubleRightOutlined />),
    getItem('E-mail/SMS Log', '93', <DoubleRightOutlined />),
    getItem('Schedule E-mail SMS Log', '94', <DoubleRightOutlined />),
    getItem('Login Credentials Send', '95', <DoubleRightOutlined />),
    getItem('E-mail Template', '96', <DoubleRightOutlined />),
    getItem('SMS Template', '97', <DoubleRightOutlined />),

  ]),

  getItem('Download Center', 'sub18', <FaDownload />, [
    getItem('Content Type', '98', <DoubleRightOutlined />),
    getItem('Content Share List', '99', <DoubleRightOutlined />),
    getItem('Upload/Share Content', '100', <DoubleRightOutlined />),
    getItem('Video Tutorial', '101', <DoubleRightOutlined />),

  ]),

  getItem('Homework', 'sub19', <MdHomeWork />, [
    getItem('Add Homework', '102', <DoubleRightOutlined />),
    getItem('Daily Assignment', '103', <DoubleRightOutlined />),

  ]),

  getItem('Library', 'sub20', <IoBook />, [
    getItem('Book List', '104', <DoubleRightOutlined />),
    getItem('Issue Return', '105', <DoubleRightOutlined />),
    getItem('Add Student', '106', <DoubleRightOutlined />),
    getItem('Add Staff Member', '107', <DoubleRightOutlined />),

  ]),

  getItem('Inventory', 'sub21', <MdInventory />, [
    getItem('Issue Item', '108', <DoubleRightOutlined />),
    getItem('Add Item Stock', '109', <DoubleRightOutlined />),
    getItem('Add Item', '110', <DoubleRightOutlined />),
    getItem('Item Category', '111', <DoubleRightOutlined />),
    getItem('Item Store', '112', <DoubleRightOutlined />),
    getItem('Item Supplier', '113', <DoubleRightOutlined />),

  ]),

  getItem('Transport', 'sub22', <BsBusFrontFill />, [
    getItem('Fees Master', '114', <DoubleRightOutlined />),
    getItem('Pickup Point', '115', <DoubleRightOutlined />),
    getItem('Routes', '116', <DoubleRightOutlined />),
    getItem('Vehicles', '117', <DoubleRightOutlined />),
    getItem('Assign Vehicle', '118', <DoubleRightOutlined />),
    getItem('Route Pickup Point', '119', <DoubleRightOutlined />),
    getItem('Student Transport Fees', '120', <DoubleRightOutlined />),

  ]),

  getItem('Hostel', 'sub23', <IoHome />, [
    getItem('Hostel Rooms', '121', <DoubleRightOutlined />),
    getItem('Room Type', '122', <DoubleRightOutlined />),
    getItem('Hostel', '123', <DoubleRightOutlined />),

  ]),

  getItem('Certificate', 'sub24', <TbCertificate />, [
    getItem('Student Certificate', '124', <DoubleRightOutlined />),
    getItem('Generate Certificate', '125', <DoubleRightOutlined />),
    getItem('Student ID Card', '126', <DoubleRightOutlined />),
    getItem('Generate ID Card', '127', <DoubleRightOutlined />),
    getItem('Staff ID Card', '128', <DoubleRightOutlined />),
    getItem('Generate Staff ID Card', '129', <DoubleRightOutlined />),
  ]),

  getItem('Front CMS', 'sub25', <GiAlliedStar />, [
    getItem('Event', '130', <DoubleRightOutlined />),
    getItem('Gallery', '131', <DoubleRightOutlined />),
    getItem('News', '132', <DoubleRightOutlined />),
    getItem('Media Manager', '133', <DoubleRightOutlined />),
    getItem('Pages', '134', <DoubleRightOutlined />),
    getItem('Menus', '135', <DoubleRightOutlined />),
    getItem('Banner Images', '136', <DoubleRightOutlined />),
  ]),

  getItem('Alumni', 'sub26', <GiThreeFriends />, [
    getItem('Manage Alumni', '137', <DoubleRightOutlined />),
    getItem('Events', '138', <DoubleRightOutlined />),
  ]),

  getItem('Reports', 'sub27', <TbReportSearch />, [
    getItem('Student Information', '139', <DoubleRightOutlined />),
    getItem('Finance', '140', <DoubleRightOutlined />),
    getItem('Attendance', '141', <DoubleRightOutlined />),
    getItem('Examinations', '142', <DoubleRightOutlined />),
    getItem('Online Examinations', '143', <DoubleRightOutlined />),
    getItem('Lesson Plan', '144', <DoubleRightOutlined />),
    getItem('Human Resource', '145', <DoubleRightOutlined />),
    getItem('Homework', '146', <DoubleRightOutlined />),
    getItem('Library', '147', <DoubleRightOutlined />),
    getItem('Inventory', '148', <DoubleRightOutlined />),
    getItem('Transport', '149', <DoubleRightOutlined />),
    getItem('Hostel', '150', <DoubleRightOutlined />),
    getItem('Alumni', '151', <DoubleRightOutlined />),
    getItem('User Log', '152', <DoubleRightOutlined />),
    getItem('Audit Trail Report', '153', <DoubleRightOutlined />),
  ]),

  getItem('System Settings', 'sub28', <AiFillSetting />, [
    getItem('General Settings', '154', <DoubleRightOutlined />),
    getItem('Session Settings', '155', <DoubleRightOutlined />),
    getItem('Notification Settings', '156', <DoubleRightOutlined />),
    getItem('SMS Settings', '157', <DoubleRightOutlined />),
    getItem('Email Settings', '158', <DoubleRightOutlined />),
    getItem('Payment Methods', '159', <DoubleRightOutlined />),
    getItem('Print Header Footer', '160', <DoubleRightOutlined />),
    getItem('Front CMS Settings', '161', <DoubleRightOutlined />),
    getItem('Roles permissions', '162', <DoubleRightOutlined />),
    getItem('Backup Restore', '163', <DoubleRightOutlined />),
    getItem('Languages', '164', <DoubleRightOutlined />),
    getItem('Currency', '165', <DoubleRightOutlined />),
    getItem('Users', '166', <DoubleRightOutlined />),
    getItem('Modules', '167', <DoubleRightOutlined />),
    getItem('Custom Fields', '168', <DoubleRightOutlined />),
    getItem('Captcha Settings', '169', <DoubleRightOutlined />),
    getItem('System Fields', '170', <DoubleRightOutlined />),
    getItem('Student Profile Update', '171', <DoubleRightOutlined />),
    getItem('Online Admissions', '172', <DoubleRightOutlined />),
    getItem('File Types', '173', <DoubleRightOutlined />),
    getItem('Sidebar Menu', '174', <DoubleRightOutlined />),
    getItem('System Update', '175', <DoubleRightOutlined />),
  ]),
];

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      
      <Navbar theme={theme} changeTheme={changeTheme}/>
      <Row>
        <Col flex='256px'>
          <Menu
            theme={theme}
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Col>
        <Col flex='auto'>
          <p>Content</p>
        </Col>
      </Row>
    </>
  );
};

export default App;