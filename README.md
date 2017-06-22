# \<air-cascade-validator\> [![Build Status](https://travis-ci.org/FiveElements/air-cascade-validator.svg?branch=master)](https://travis-ci.org/FiveElements/air-cascade-validator)

Air cascade Validator manager the validation of all Nodes inside



## Usage

```html
<air-cascade-validator is-valid="{{isValid}}">
  <paper-input label="Firstname" value="{{data.firstname}}" required></paper-input>
  <paper-input label="Lastname" value="{{data.lastname}}" required></paper-input>
  <paper-input label="email" value="{{data.email}}" type="email"></paper-input>
</air-cascade-validator>
```