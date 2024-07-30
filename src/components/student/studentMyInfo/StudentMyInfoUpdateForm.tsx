import { AppDispatch, RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { studentInfo } from "../../../store/userInfo/profileSlice";
import { useNavigate } from "react-router-dom";
import { studentInfoPatch } from "../../../store/userInfo/profileSlice";

export interface StudentInfoUpdateForm {
  nickname: string;
  email: string;
  password: string;
  password_auth_token: string | null;
}

const StudentMyInfoUpdateForm: React.FC = () => {
  const temporaryToken = localStorage.getItem("passwordAuthToken");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const teacherData = useSelector((state: RootState) => state.profile.info);
  useEffect(() => {
    dispatch(studentInfo());
  }, [dispatch]);

  // 폼 값 바인딩
  const [formData, setFormData] = useState<StudentInfoUpdateForm>({
    nickname: teacherData?.nickname || "",
    password: "",
    email: teacherData?.email || "",
    password_auth_token: temporaryToken,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // 내 정보 수정 요청
  const handleUpdateSubmit = async () => {
    await dispatch(studentInfoPatch(formData));
    localStorage.removeItem("passwordAuthToken");
    navigate("/student/profile");
  };
  return (
    <div className="w-9/12 bg-moreBeige rounded-xl shadow-md p-6 my-12 mx-auto relative">
      <form onSubmit={handleUpdateSubmit}>
        <h1 className="my-2 p-2 text-center text-4xl text-lightNavy">
          내정보 수정
        </h1>
        <div className="grid grid-cols-1 my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">닉네임</label>
          <input
            name="nickname"
            className="p-2 w-72 border-2 rounded-md"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">비밀번호</label>
          <input
            name="password"
            type="password"
            className="p-2 w-72 border-2 rounded-md"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">이메일</label>
          <input
            name="email"
            type="email"
            className="p-2 w-72 border-2 rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button
          onClick={handleUpdateSubmit}
          className="p-3 bg-red-200 text-white rounded-md shadow-md hover:bg-red-300"
        >
          수정하기
        </button>
      </form>
    </div>
  );
};

export default StudentMyInfoUpdateForm;