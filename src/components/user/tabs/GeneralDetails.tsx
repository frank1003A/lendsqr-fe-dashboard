import { USER } from "components/types/user";

const GeneralDetails = ({user}: {user: USER}) => {
  return (
    <div className="general-details">
      <div className="slot">
        <h1>Personal Information</h1>

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"levelofeducation"}>full name</label>
            <p id="fullname">{user.profile?.firstName} {user.profile?.lastName}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"phonenumber"}>phone number</label>
            <p id="phonenumber">{user.profile?.phoneNumber}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"emailaddress"}>email address</label>
            <p id="emailaddress">{user.email}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"bvn"}>bvn</label>
            <p id="bvn">{user.profile?.bvn}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"gender"}>gender</label>
            <p id="gender">{user.profile?.gender}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="slot">
        <h1>education and employment</h1>

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"employmentstatus"}>Employment Status</label>
            <p id="employmentstatus">
              {user.education?.employmentStatus}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"sectorofemployment"}>Sector of Employment</label>
            <p id="sectorofemployment">
              {user.education?.sector}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"durationofemployment"}>
              Duration of Employment
            </label>
            <p id="durationofemployment">
              {user.education?.duration}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"officeemail"}>Office Email</label>
            <p id="officeemail">
              {user.education?.officeEmail}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"monthlyincome"}>monthly income</label>
            <p id="monthlyincome">
            ₦{user.education?.monthlyIncome && user.education?.monthlyIncome[0]}
              -
              ₦{user.education?.monthlyIncome && user.education?.monthlyIncome[1]}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"loanrepayment"}>loan repayment</label>
            <p id="loanrepayment">
              {user.education?.loanRepayment}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="slot">
        <h1>socials</h1>

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"twitter"}>twitter</label>
            <p id="twitter">{user.socials?.twitter}</p>
          </div>

          <div className="infoslot">
            <label htmlFor={"facebook"}>facebook</label>
            <p id="facebook">{user.socials?.facebook}</p>
          </div>

          <div className="infoslot">
            <label htmlFor={"instagram"}>instagram</label>
            <p id="instagram">{user.socials?.instagram}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="slot">
        <h1>guarantor</h1>

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"guarantor_fullname"}>guarantor fullname</label>
            <p id="guarantor_fullname">
              {user.guarantor?.firstName}  {user.guarantor?.lastName}
              </p>
          </div>
          <div className="infoslot">
            <label htmlFor={"guarantor_phonenumber"}>
              guarantor phonenumber
            </label>
            <p id="guarantor_phonenumber">{user.guarantor?.phoneNumber}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"guarantor_emailaddress"}>
              guarantor address
            </label>
            <p id="guarantor_address">{user.guarantor?.address}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"guarantor_relationship"}>
              guarantor gender
            </label>
            <p id="guarantor_relationship">{user.guarantor?.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralDetails;
