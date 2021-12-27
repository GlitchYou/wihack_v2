# wihack_v2
Try to connect to wifis with known default password

## Usage

- `string`
  - string used in regex

- `%name`
  - name wireless (e.g AndroidAp)

- `%mac`
  - mac wireless (e.g a1:b2:c3:d4:e6:f7)

- `regex`
  - pattern searched in string

- `replace`
  - string replacement `$1` are identified as groups

- `upper`
  - search and leave all letters found in uppercase

- `lower`
  - search and leave all letters found in lowercase

#### Table on `database.db` from `templates`

| **id** | **string** | **regex**                                                                                       | **replace**  | **upper** | **lower** |
|--------|------------|-------------------------------------------------------------------------------------------------|--------------|-----------|-----------|
| 1      | %name %mac | \(?:NET\|CLARO\)\_\[25\]G\(\\w\+\) \\w\+:\\w\+:\(\\w\+\):\.\+                                   | $2$1         | \.\+      |           |
| 2      | %name %mac | \(?:GVT\|VIVO\(?:FIBRA\)?\)\-\(\\w\+\) \\w\+:\\w\+:\(\\w\+\):\(\\w\+\)\.\+                      | $2$3$1       | \.\+      |           |
| 3      | %name %mac | \(?:GVT\|VIVO\(?:FIBRA\)?\)\-\(\\w\+\)\-\[25\]G \\w\+:\(\\w\+\):\(\\w\+\):\\w\+:\\w\+:\(\\w\+\) | $2$3$1$4     | \.\+      |           |
| 4      | %name %mac | \(?:GVT\|VIVO\(?:FIBRA\)?\)\-\(\\w\+\)\-\[25\]G \\w\+:\(\\w\+\):\(\\w\+\):\(\\w\+\):\\w\+:\\w\+ | $2$3$4$1     |           | \.\+      |
| 5      | %name %mac | \(?:GVT\|VIVO\(?:FIBRA\)?\)\-\(\\w\+\) \(\\w\+\):\(\\w\+\):\(\\w\+\):\(\\w\+\):\\w\+:\(\\w\+\)  | $2$3$4$5$1   |           | \.\+      |
| 6      | %mac       | \\w\+:\\w\+:\(\\w\+\):\(\\w\+\):\(\\w\+\):\(\\w\+\)                                             | $1$2$3$4     | \.\+      |           |
| 7      | %mac       | \(\\w\+\):\(\\w\+\):\(\\w\+\):\(\\w\+\):\(\\w\+\):\(\\w\+\)                                     | $1$2$3$4$5$6 |           | \.\+      |
