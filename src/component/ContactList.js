import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== '') {
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div>
      <SearchBox />
      <p>num :{filteredList.length} </p>
      {filteredList.map((item, index) => {
        return <ContactItem key={index} item={item} />;
      })}
    </div>
  );
};

export default ContactList;
