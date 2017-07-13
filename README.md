# \<air-cascade-validator\> [![Build Status](https://travis-ci.org/FiveElements/air-cascade-validator.svg?branch=master)](https://travis-ci.org/FiveElements/air-cascade-validator)

Air cascade Validator manager the validation of all Nodes inside



## Usage
<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="air-cascade-validator.html">
    <link rel="import" href="../paper-inputpaper-input.html">
    <style>
      paper-input {
        max-width: 400px;
        margin: auto;
      }
      iron-icon, div[suffix] {
        color: hsl(0, 0%, 50%);
        margin-right: 12px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<air-cascade-validator is-valid="{{isValid}}" auto-focus>
  <paper-input label="Firstname" value="{{data.firstname}}" required></paper-input>
  <paper-input label="Lastname" value="{{data.lastname}}" required></paper-input>
  <paper-input label="email" value="{{data.email}}" type="email"></paper-input>
</air-cascade-validator>
```

# Release

```bash
$ git tag -a v2.0.3 -m "Release 2.0.3"
$ git push origin --tags
```
