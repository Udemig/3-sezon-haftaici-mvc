import React from "react";

const ListStudentsView = ({ students = [] }) => {
  return (
    <div>
      {students.map((item) => (
        <div key={item.id}>
          <p>
            {item.firstName} {item.lastName}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListStudentsView;
