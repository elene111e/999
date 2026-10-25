// 31
function run31() {
  let arr = [10, -5, 20, 15, -2, 8, 3];
  let sum = 0;
  let even = 0;
  let odd = 0;
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    }
  }
  let avg = sum / arr.length;
  document.getElementById("res31").innerText = "ჯამი: " + sum + "\nსაშუალო: " + avg.toFixed(2) + "\nლუწი: " + even + "\nკენტი: " + odd + "\nდადებითი: " + pos + "\nუარყოფითი: " + neg;
}

// 32
function run32() {
  let arr = [12, 45, 7, 89, 23];
  let asc = [];
  for (let i = 0; i < arr.length; i++) {
    asc.push(arr[i]);
  }
  for (let i = 0; i < asc.length; i++) {
    for (let j = 0; j < asc.length - 1 - i; j++) {
      if (asc[j] > asc[j + 1]) {
        let temp = asc[j];
        asc[j] = asc[j + 1];
        asc[j + 1] = temp;
      }
    }
  }
  let desc = [];
  for (let i = asc.length - 1; i >= 0; i--) {
    desc.push(asc[i]);
  }
  let min = asc[0];
  let max = asc[asc.length - 1];
  let secondMax = asc[asc.length - 2];
  document.getElementById("res32").innerText = "ზრდადობით: " + asc.join(", ") + "\nკლებადობით: " + desc.join(", ") + "\nმაქსიმალური: " + max + "\nმინიმალური: " + min + "\nმეორე მაქსიმალური: " + secondMax;
}

// 33
function run33() {
  let num = Number(document.getElementById("inp33").value);
  if (isNaN(num)) return;
  let sum = 0;
  let text = "";
  for (let i = 1; i <= 20; i++) {
    let res = num * i;
    sum += res;
    text += num + " * " + i + " = " + res + "\n";
  }
  document.getElementById("res33").innerText = text + "\nშედეგების ჯამი: " + sum;
}

// 34
function run34() {
  let arr = [2, 3, 4, 5, 10, 11, 13, 17, 20];
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (n > 1) {
      let isPrime = true;
      for (let j = 2; j < n; j++) {
        if (n % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(n);
      }
    }
  }
  document.getElementById("res34").innerText = "მარტივი რიცხვები:\n" + primes.join(", ");
}

// 35
function run35() {
  let val = document.getElementById("inp35").value;
  if (!val) return;
  let count = val.length;
  let sum = 0;
  let max = Number(val[0]);
  let min = Number(val[0]);
  for (let i = 0; i < count; i++) {
    let digit = Number(val[i]);
    sum += digit;
    if (digit > max) max = digit;
    if (digit < min) min = digit;
  }
  let reversed = "";
  for (let i = val.length - 1; i >= 0; i--) {
    reversed += val[i];
  }
  document.getElementById("res35").innerText = "რაოდენობა: " + count + "\nჯამი: " + sum + "\nყველაზე დიდი: " + max + "\nყველაზე პატარა: " + min + "\nშებრუნებული: " + reversed;
}

// 36
function run36() {
  let a = [1, 2, 3, 4, 5];
  let b = [3, 4, 5, 6, 7];
  let common = [];
  for (let i = 0; i < a.length; i++) {
    let val = a[i];
    let inB = false;
    for (let j = 0; j < b.length; j++) {
      if (b[j] === val) {
        inB = true;
        break;
      }
    }
    let added = false;
    for (let k = 0; k < common.length; k++) {
      if (common[k] === val) {
        added = true;
        break;
      }
    }
    if (inB && !added) {
      common.push(val);
    }
  }
  document.getElementById("res36").innerText = "საერთო: " + common.join(", ") + "\nრაოდენობა: " + common.length;
}

// 37
function run37() {
  let arr = [2, 5, 2, 8, 5, 9, 8];
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === val) {
        found = true;
        break;
      }
    }
    if (!found) {
      unique.push(val);
    }
  }
  document.getElementById("res37").innerText = "შედეგი: [" + unique.join(", ") + "]";
}

// 38
function run38() {
  let arr = [1, 2, 3, 4, 5, 6];
  let evens = [];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }
  let res = [];
  for (let i = 0; i < evens.length; i++) {
    res.push(evens[i]);
  }
  for (let i = 0; i < odds.length; i++) {
    res.push(odds[i]);
  }
  document.getElementById("res38").innerText = "შედეგი: [" + res.join(", ") + "]";
}

// 39
function run39() {
  let names = ["ანასტასია", "გიორგი", "ნინო", "ლუკა", "ანა"];
  let longest = names[0];
  let shortest = names[0];
  let withA = [];
  let longerThan5 = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name.length > longest.length) longest = name;
    if (name.length < shortest.length) shortest = name;
    if (name.indexOf("ა") !== -1) {
      withA.push(name);
    }
    if (name.length > 5) longerThan5.push(name);
  }
  let sorted = [];
  for (let i = 0; i < names.length; i++) {
    sorted.push(names[i]);
  }
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        let t = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = t;
      }
    }
  }
  document.getElementById("res39").innerText = "ყველაზე გრძელი: " + longest + "\nყველაზე მოკლე: " + shortest + "\n\"ა\"-ს შემცველი: " + withA.join(", ") + "\n>5 სიმბოლო: " + longerThan5.join(", ") + "\nდალაგებული: " + sorted.join(", ");
}

// 40
function run40() {
  let arr = [2, 3, 2, 5, 3, 2];
  let freqKeys = [];
  let freqVals = [];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let foundIndex = -1;
    for (let j = 0; j < freqKeys.length; j++) {
      if (freqKeys[j] === val) {
        foundIndex = j;
        break;
      }
    }
    if (foundIndex === -1) {
      freqKeys.push(val);
      freqVals.push(1);
    } else {
      freqVals[foundIndex]++;
    }
  }
  let text = "";
  for (let i = 0; i < freqKeys.length; i++) {
    text += freqKeys[i] + " — " + freqVals[i] + "-ჯერ;\n";
  }
  document.getElementById("res40").innerText = text;
}

// 41
function run41() {
  let students = [
    { name: "Nino", grade: 95 },
    { name: "Saba", grade: 45 },
    { name: "Ana", grade: 82 },
    { name: "Luka", grade: 30 }
  ];
  let high = [];
  let top = students[0];
  let low = students[0];
  let sum = 0;
  let failed = 0;
  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    sum += s.grade;
    if (s.grade > 90) {
      high.push(s.name);
    }
    if (s.grade > top.grade) {
      top = s;
    }
    if (s.grade < low.grade) {
      low = s;
    }
    if (s.grade < 51) {
      failed++;
    }
  }
  let avg = sum / students.length;
  document.getElementById("res41").innerText = ">90 ქულა: " + high.join(", ") + "\nყველაზე მაღალი: " + top.name + "\nყველაზე დაბალი: " + low.name + "\nსაშუალო: " + avg + "\nჩაიჭრა (<51): " + failed;
}

// 42
function run42() {
  let products = [
    { name: "Phone", price: 120, quantity: 5 },
    { name: "Laptop", price: 1500, quantity: 2 },
    { name: "Mouse", price: 40, quantity: 10 }
  ];
  let grandTotal = 0;
  let expensive = products[0];
  let mostQty = products[0];
  let over100 = [];
  for (let i = 0; i < products.length; i++) {
    let p = products[i];
    grandTotal += p.price * p.quantity;
    if (p.price > expensive.price) {
      expensive = p;
    }
    if (p.quantity > mostQty.quantity) {
      mostQty = p;
    }
    if (p.price > 100) {
      over100.push(p.name);
    }
  }
  document.getElementById("res42").innerText = "საერთო ჯამი: " + grandTotal + "₾\nყველაზე ძვირი: " + expensive.name + "\nყველაზე მეტი რაოდენობა: " + mostQty.name + "\n>100 ლარი: " + over100.join(", ");
}

// 43
function run43() {
  let accounts = [
    { owner: "Nika", balance: 500 },
    { owner: "Lizi", balance: 1200 }
  ];
  function addMoney(owner, amt) {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].owner === owner) {
        accounts[i].balance += amt;
        break;
      }
    }
  }
  function subtractMoney(owner, amt) {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].owner === owner) {
        if (accounts[i].balance >= amt) {
          accounts[i].balance -= amt;
        }
        break;
      }
    }
  }
  addMoney("Nika", 200);
  subtractMoney("Lizi", 300);
  let richest = accounts[0];
  let total = 0;
  for (let i = 0; i < accounts.length; i++) {
    total += accounts[i].balance;
    if (accounts[i].balance > richest.balance) {
      richest = accounts[i];
    }
  }
  document.getElementById("res43").innerText = "Nika: " + accounts[0].balance + "₾\nLizi: " + accounts[1].balance + "₾\nყველაზე მდიდარი: " + richest.owner + "\nსულ ბალანსი: " + total + "₾";
}

// 44
function run44() {
  let movies = [
    { name: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { name: "Avatar", genre: "Action", rating: 7.9 },
    { name: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
  ];
  let sciFi = [];
  let highRating = [];
  let topMovie = movies[0];
  let sumRating = 0;
  for (let i = 0; i < movies.length; i++) {
    let m = movies[i];
    sumRating += m.rating;
    if (m.genre === "Sci-Fi") {
      sciFi.push(m.name);
    }
    if (m.rating > 8) {
      highRating.push(m.name);
    }
    if (m.rating > topMovie.rating) {
      topMovie = m;
    }
  }
  let avg = sumRating / movies.length;
  document.getElementById("res44").innerText = "Sci-Fi: " + sciFi.join(", ") + "\n>8 რეიტინგი: " + highRating.join(", ") + "\nსაუკეთესო: " + topMovie.name + "\nსაშუალო რეიტინგი: " + avg.toFixed(1);
}

// 45
function run45() {
  let sales = [
    { product: "Phone", price: 1000, quantity: 3 },
    { product: "Mouse", price: 50, quantity: 25 },
    { product: "Laptop", price: 2000, quantity: 2 }
  ];
  let totalRev = 0;
  let totalUnits = 0;
  let bestProd = sales[0];
  let bestRev = sales[0].price * sales[0].quantity;
  let leastSold = sales[0];
  let over1000 = [];
  for (let i = 0; i < sales.length; i++) {
    let s = sales[i];
    let rev = s.price * s.quantity;
    totalRev += rev;
    totalUnits += s.quantity;
    if (rev > bestRev) {
      bestRev = rev;
      bestProd = s;
    }
    if (s.quantity < leastSold.quantity) {
      leastSold = s;
    }
    if (rev > 1000) {
      over1000.push(s.product);
    }
  }
  document.getElementById("res45").innerText = "საერთო შემოსავალი: " + totalRev + "₾\nყველაზე მომგებიანი: " + bestProd.product + "\nნაკლებად გაყიდული: " + leastSold.product + "\n>1000₾ შემოსავალი: " + over1000.join(", ") + "\nსულ გაყიდული: " + totalUnits + " ცალი";
}