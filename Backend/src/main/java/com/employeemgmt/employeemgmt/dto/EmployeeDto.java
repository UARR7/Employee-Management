package com.employeemgmt.employeemgmt.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

    private long id;
    private String firstName;
    private String lastName;
    private String email;
}

///check for git 
///new check
//package com.employeemgmt.employeemgmt.dto;
//
//public class EmployeeDto {
//
//    private long id;
//    private String firstName;
//    private String lastName;
//    private String email;
//
//    // No-arg constructor
//    public EmployeeDto() {
//    }
//
//    // All-arg constructor
//    public EmployeeDto(long id, String firstName, String lastName, String email) {
//        this.id = id;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.email = email;
//    }
//
//    // Getters and setters
//    public long getId() {
//        return id;
//    }
//
//    public void setId(long id) {
//        this.id = id;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//}
