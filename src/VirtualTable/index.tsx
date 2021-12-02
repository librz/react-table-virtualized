import { FC, useEffect } from 'react'
import faker from 'faker'
import { Column } from './interface'
// import { MacScrollbar } from 'mac-scrollbar'
import HeaderRow from './Row/HeaderRow'
import styles from './index.module.css'
import DataCell from './Cell/DataCell'
import DataRow from './Row/DataRow'

interface IProps {

}

const cols: Array<Column<any>> = [
  {
    dataIndex: 'name',
    title: "Name",
    flexBasis: 200,
  },
  {
    dataIndex: 'birthday',
    title: "Date of birth",
    flexBasis: 160,
  },
  {
    dataIndex: 'phone',
    title: "Phone number",
    flexBasis: 200,
  },
  {
    dataIndex: 'city',
    title: "City",
    flexBasis: 160,
  },
  { 
    dataIndex: 'company',
    title: "Company name",
    flexBasis: 200,
  },
  { 
    dataIndex: 'description',
    title: "Description",
    flexBasis: 600,
  },
];

function getRecords(length = 10) {
  const result = [];
  for (let i = 0; i < length; i++) {
    const name = faker.name.findName()
    const birthday = faker.date.past().toDateString()
    const phone = faker.phone.phoneNumber()
    const city = faker.address.city();
    const company = faker.company.companyName()
    const description = faker.lorem.sentences(1)
    result.push({ name, birthday, phone, city, company, description })
  }
  return result
}

const records = getRecords(100);


const FlexTable: FC<IProps> = () => {

  useEffect(() => {
    
  }, [])

  return (
    <div className={styles.table}>
      <HeaderRow columns={cols} />
      <div className={styles.list}>
        {
          records.map((record, index) => {
            return (
              <DataRow key={index} index={index} record={record} columns={cols} />
            )
          })
        }
      </div>
    </div>
  )
}

export default FlexTable;
