Tablefixedheader 
===========
這是一個能自動固定表頭的簡單Jquery Plugin <br />
支援Window resize 及 ajax complete 自動變化寬度的功能

## Requirements

  * [jquery.ba-resize.js](https://raw.githubusercontent.com/cowboy/jquery-resize/v1.1/jquery.ba-resize.js)
  * [jQuery](http://jquery.com/)

## Browser compatibility

  * IE 8+
  * Chrome 8+
  * Firefox 10+
  * Safari 3+
  * Opera 10.6+

## Usage

  $("#tableName").wcTableFix();
  
## Available options

| Name           | Type           | Description  |
| -------------  |:--------------:| :------------|
| width          | String, Number |Set table height. <br />`Default Value : 300` |
| height         | String, Number |Set table width. <br />`Default Value : "auto"`|
| ajaxAutoResize | boolean        |Ajax complete 自動調整寬度 <br />`Default Value : "true"`|

## API Methods

| Name           | Description    | 
| -------------  |:--------------:| 
| SetThWidth     | 重新調整th寬度 <br /> $.wcTableFix("TableName").SetThWidth(); |
| bindResize     | Rebind resize event <br /> $.wcTableFix("TableName").bindResize(); |
| SetTableHeight | Set table height <br /> $.wcTableFix("TableName").SetTableHeight();       |
| SetTableWidth  | Set table width <br /> $.wcTableFix("TableName").SetTableWidth();       |
