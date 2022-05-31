import React, { useEffect, useMemo } from "react";

import { Box, Checkbox, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomTable } from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux";

const EmplyeesTable = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const data = useMemo(() => [...userData.users], [userData.users]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Contas",
        columns: [
          {
            accessor: "accessor",
            Header: "Header",
            Cell: ({ row: { original } }) => <Checkbox bg="#EDF2F7"></Checkbox>,
          },
          {
            Header: "ID Conta",
            accessor: "id",
          },
          {
            Header: "Nome",
            accessor: "firstName",
          },
          {
            Header: "E-mail",
            accessor: "email",
          },
          {
            Header: "Documento",
            accessor: "documentNumber",
          },
          {
            Header: "Data",
            accessor: "dateNumberDocumentPhoto",
          },
          {
            Header: "Status",
            accessor: "accounts[0].status",
          },
          {
            Header: "Sobre",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/accounts/${props.cell.row.cells[1].value}`}>
                {" "}
                <Box ml="25%">
                  <AiFillEye color={"gray"} fontSize="22px" />
                </Box>
              </Link>
            ),
          },
          {
            Header: "Excluir",
            accessor: "delete",
            Cell: ({ row: { original } }) => (
              <Box display="flex" justifyContent="space-around">
                <FaTrashAlt color={"gray"} />
              </Box>
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <Text w="90%" fontSize="25px" fontWeight="bold">
        Contas
      </Text>
      <CustomTable data={data} columns={columns} />
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

export default EmplyeesTable;
