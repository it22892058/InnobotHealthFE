import React, { useState } from 'react';
import './ClaimForm.css'
import '../../App.css'
import logo from './logo.png'
import icon_prof from './icon_prof.png'
import notify from './notify.png'


import { Link } from 'react-router-dom';

const ClaimForm = () => {
  const [claimId, setClaimId] = useState('');
  const [memberId, setMemberId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isClaimCoveredByAnotherInsurance, setIsClaimCoveredByAnotherInsurance] = useState(false);
  const [isClaimRelatedToAnAccident, setIsClaimRelatedToAnAccident] = useState(false);
  const [amountLKR, setAmountLKR] = useState('');
  const [dateOfClaim, setDateOfClaim] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isChecked, setIsChecked] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  }
  const myProf = () => {
    console.log("CLICKED");
  }
  const myNotifications = () => {
    console.log("CLICKED");
  }

  return (
  <body>
        <div className="top">
              <div className="logo">
                  <img className="logo" src={logo} alt='logo'/>
                  <h4 className='h4'>Create Claim</h4>
              </div>

              <div className="d">
                <img className="profButton" src={notify} alt='notify' onClick={myNotifications} />
                <img className="profButton" src={icon_prof} alt='icon_prof' onClick={myProf} />
  			  </div>

        </div>

    <div className="claim-form-container">

      <form onSubmit={handleSubmit} className="claim-form">
        <div className="form-row" >
        <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
         <div className="devb">
          <label>
            Claim ID:</label>
            <div>
            <input type="text" value={claimId} onChange={(event) => setClaimId(event.target.value)} placeholder="Claim ID"/>
            </div>
         </div>
         <div className="devb">
          <label>
            Member ID:</label>
            <div>
            <input type="text" value={memberId} onChange={(event) => setMemberId(event.target.value)} placeholder="Member ID"/>
            </div>
         </div>
         </div>

         <div style={{width: '800px', marginLeft: '50px'}}>
         <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <label>I, the undersigned hereby declare that the information on below is true and complete and that reimbursement requested is for expenses made on me for the treatment of my medical condition.
            </label>
         </div>
        <div >
          <button type="cancel">Cancel</button>
          <button type="submit">Submit</button>
        </div>
        </div>
      </form>

   <div className="form-side">

     <div className="form-section">
      <div className="devb">
        <label>
        Claim Type:</label>
        <select>
            <option value="">Select</option>
            <option value="Cashless">Cashless</option>
            <option value="reimbursement">Reimbursement</option>
            </select>
      </div>
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className="devb">
        <label>
          First Name:</label>
          <div>
              <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First Name" />
          </div>
        </div>
        <div className="devb" style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <label>
          Last Name:</label>
        <div>
            <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Last Name" />
        </div>
        </div>
    </div>


      <div className="devb">
        <label>
          Date of Birth:</label>
          <input type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />

      </div>
      <div className="devb">
        <label>
          Gender:</label>
          <select value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

      </div>
      <div className="devb">
        <label>
          Phone Number:</label>
          <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="+94 (0)## ### ####"/>

      </div>
      <div className="devb">
        <label>
          Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email"/>

      </div>
     </div>

      <div className="form-section-2">
      <div className="devb">
        <label>
          Is the Claim covered by another Insurance:</label>
          <select value={isClaimCoveredByAnotherInsurance} onChange={(event) => setIsClaimCoveredByAnotherInsurance(event.target.value === 'true')}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

      </div>
      <div className="devb">
        <label>
          Is the Claim (partially) related to an accident:</label>
          <select value={isClaimRelatedToAnAccident} onChange={(event) => setIsClaimRelatedToAnAccident(event.target.value === 'true')}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            <option value={true}>Work Related</option>
          </select>

      </div>
      <div className="devb">
        <label>
          Amount LKR:</label>
          <input type="number" value={amountLKR} onChange={(event) => setAmountLKR(event.target.value)}  placeholder="Amount"/>

      </div>
      <div className="devb">
        <label>
          Diagnosis:</label>
          <select value={diagnosis} onChange={(event) => setDiagnosis(event.target.value)}>
            <option value="">Select</option>
            <option value="Broken Bone">Broken Bone</option>
            <option value="Flu">Flu</option>
            <option value="Fracture">Fracture</option>
            <option value="Sprain">Sprain</option>
          </select>

      </div>
      <div className="devb">
        <label>
          Date:</label>
          <input type="date" value={dateOfClaim} onChange={(event) => setDateOfClaim(event.target.value)} />

      </div>
      <div className="devb">
        <label>Upload Receipt:</label>

          <input type="file" onChange={(event) => setImageUrl(event.target.value)} />

      </div>
      </div>
      </div>
   </div>

</body>
  );
}

export default ClaimForm;