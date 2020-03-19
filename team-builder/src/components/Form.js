import React, { useState } from 'react';

const MemberForm = props => {
  const [member, setMember] = useState ({
    id: Date.now(),
    name: "",
    email: "",
    position: ""
  });


}

export default MemberForm;