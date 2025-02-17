const userCardDataParser = (apiResponse) => {
  const userCardDataList = [];
  apiResponse.users.forEach((item) => {
    userCardDataList.push({
      id: item?.id,
      imgUrl: 'https://avatar.iran.liara.run/public',
      title: `${item?.firstName} ${item?.lastName}`,
      subtitle1: item?.address?.city,
      subtitle2: item?.phone,
      footerLeft: 'Role',
      footerRight: item?.role,
      details: {
        aboutUser: `Company : ${item?.company?.name}
Department : ${item?.company?.department}
Role : ${item?.company?.title}
        `,
      },
    });
  });
  return userCardDataList;
};

export { userCardDataParser };
