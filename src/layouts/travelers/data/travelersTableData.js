/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import gatinho from "assets/images/gatinho.jpg";

const basicFetch = async (apibase, endpoint) => {
  const req = await fetch(`${apibase}${endpoint}`);
  const json = await req.json();
  return json;
};

export default function data() {
  const searchResult = basicFetch(`http://localhost:5000`, `/usuarios`);
  const travelers = [];

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  for (let i = 0; i < searchResult.users.length; i + 1) {
    const traveler = {
      author: (
        <Author
          image={gatinho}
          name={searchResult.users[i].name}
          email={searchResult.users[i].email}
        />
      ),
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Acessar Perfil
        </MDTypography>
      ),
    };
    travelers.push(traveler);
  }

  return {
    columns: [
      { Header: "dados", accessor: "author", width: "45%", align: "left" },
      { Header: "", accessor: "action", align: "right" },
    ],

    rows: travelers,
  };
}
