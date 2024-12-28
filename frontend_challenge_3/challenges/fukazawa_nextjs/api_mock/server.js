const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('/src/db.json')
const middlewares = jsonServer.defaults()

// すべてのリクエストに対して、json-server 標準のミドルウェアを使う
server.use(middlewares)

/**
 * エネルギー会社一覧取得API
 * .. Query パラメータ
 * .... id: エネルギー会社ID
 */
server.get('/energy-companies/', (req, res) => {

  const query = req.query

  res.code = 404

  let response_data = {
    "code": 404,
    "message": "エネルギー会社が見つかりません。"
  }

  if (query.id == 1) {

    res.code = 200
    response_data = [
      {
        "id": 1,
        "name": "東京電力",
        "area_code": 1,
        "area_name": "東京電力エリア"
      },
      {
        "id": 9999,
        "name": "その他",
        "area_code": 9999,
        "area_name": "その他エリア"
      }
    ]

  } else if (query.id == 5) {

    res.code = 200
    response_data = [
      {
        "id": 2,
        "name": "関西電力",
        "area_code": 5,
        "area_name": "関西電力エリア"
      },
      {
        "id": 9999,
        "name": "その他",
        "area_code": 9999,
        "area_name": "その他エリア"
      }
    ]

  }

  res.jsonp(response_data)
})


/**
 * エネルギー会社が提供する契約プランを取得するAPI
 * .. Query パラメータ
 * .... company_id: エネルギー会社ID
 */
server.get('/energy-companies/plans/', (req, res) => {

  const query = req.query

  res.code = 404

  let response_data = {
    "code": 404,
    "message": "提供できるプランが見つかりません。"
  }

  const plan_b_c_capacities = [];

  // 6kVA から 49kVA まで 1kVA 刻み
  for (let kva = 6; kva <= 49; kva++) {
    const amp = kva; // 1kVA = 10A（仮定）
    plan_b_c_capacities.push({ name: `${amp}A` });
  }

  if (query.company_id == 1) {

    res.code = 200
    response_data = [
      {
        "id": 2,
        "name": "従量電灯B",
        "capacities": [
          { "name": "10A" },
          { "name": "15A" },
          { "name": "20A" },
          { "name": "30A" },
          { "name": "40A" },
          { "name": "50A" },
          { "name": "60A"}
        ]
      },
      {
        "id": 3,
        "name": "従量電灯C",
        "capacities": plan_b_c_capacities
      }
    ]

  } else if (query.company_id == 2) {

    res.code = 200
    response_data = [
      {
        "id": 1,
        "name": "従量電灯A",
        "capacities": []
      },
      {
        "id": 2,
        "name": "従量電灯B",
        "capacities": plan_b_c_capacities
      }
    ]
  }

  res.jsonp(response_data)
})


// 最後に既存のルータを使う
server.use(router)

// ポート 8888 で起動
server.listen(8888, () => {
  console.log('JSON Server is running')
})
