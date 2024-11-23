const users = [
    {
      name: "Alex",
      isActive: false,
      eyeColor: "Green",
      gender: "male",
      email: "Alex@gmail.com",
      age: 30,
    },
    {
      name: "George",
      isActive: true,
      eyeColor: "brown",
      gender: "male",
      email: "George@gmail.com",
      age: 25,
    },
    {
      name: "Mark",
      isActive: true,
      eyeColor: "brown",
      gender: "male",
      email: "Mark@gmail.com",
      age: 35,
    },
    {
      name: "Oleg",
      isActive: false,
      eyeColor: "blue",
      gender: "male",
      email: "Oleg@gmail.com",
      age: 28,
    },
    {
      name: "Alla",
      isActive: false,
      eyeColor: "blue",
      gender: "female",
      email: "Alla@gmail.com",
      age: 40,
    },
    {
      name: "Nina",
      isActive: false,
      eyeColor: "green",
      gender: "female",
      email: "Nina@gmail.com",
      age: 22,
    },
  ];
  

  console.log("1");
  const names = [];
  const userName = (arr, newArr) =>
    arr.forEach((user) => newArr.push(user.name));
  userName(users, names);
  console.log(names);
  console.log("2");
  const EyeColor = (arr, color) =>
    arr.filter((user) => user.eyeColor === color);
  console.log(EyeColor(users, "brown"));
  console.log(EyeColor(users, "blue"));
  console.log(EyeColor(users, "gray"));
  console.log("3");
  const GenderUser = (arr, gender) => {
    const filteredUsers = arr.filter((user) => user.gender === gender);
    const names = [];
    userName(filteredUsers, names);
    return names;
  };
  console.log(GenderUser(users, "male"));
  console.log(GenderUser(users, "female"));
  console.log("4");
  const UserStatus = (arr, status) =>
    arr.filter((user) => user.isActive === status);
  console.log(UserStatus(users, true));
  console.log(UserStatus(users, false));
  console.log("5");
  const EmailUser = (arr, email) => arr.find((user) => user.email === email);
  console.log(EmailUser(users, "emma@gmail.com"));
  console.log(EmailUser(users, "sophia@gmail.com"));
  console.log("6");
  const AgeUser = (arr, min, max) =>
    arr.filter((user) => user.age > min && user.age < max);
  console.log(AgeUser(users, 20, 30));
  console.log(AgeUser(users, 10, 25));