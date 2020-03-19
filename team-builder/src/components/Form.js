import React, { useState } from 'react';

const MemberForm = props => {
  const [member, setMember] = useState ({
    
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Member Name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="First and Last Name"
          name="name"
          value={member.name}
          onChange={changeHandler}
          required
        />
        <br />
        <label htmlFor="email">Member Email</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          name="email"
          value={member.email}
          onChange={changeHandler}
          required
        />
        <br />
        <label htmlFor="role">Member Role</label>
        <br />
        <select
          name="role"
          id="role"
          value={member.role}
          onChange={changeHandler}
        >
          <option value="Junior">Junior Engineer</option>
          <option value="Senior">Senior Engineer</option>
          <option value="Frontend">Frontend Designer</option>
          <option value="BackendDesigner">Backend Designer</option>
        </select>
        <br />
        <label htmlFor="addMember">Add Member</label>
        <button type="submit" id="addMember">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MemberForm;