(function () {
  console.log("in arraryObjectPushExample.js... -> ");

  let array = [
    {
      field: "lob",
      option: [
        { label: "foo1", value: "bar1" },
        { label: "foo2", value: "bar2" },
      ],
    },
  ];
  console.log("array = " + JSON.stringify(array));
  console.log("array.option size = " + array[0].option.length);
  let newItem = { label: "foo3", value: "bar3" };
  console.log("newItem = " + JSON.stringify(newItem));
  array[0].option.push(newItem);
  console.log("array.option size = " + array[0].option.length);
  console.log("array = " + JSON.stringify(array));
  let newArray = array[0].option.filter((item) => item.label !== "foo3");
  console.log("newArray = " + JSON.stringify(newArray));
})();
