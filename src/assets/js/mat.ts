export const zeros = (n: number, m: number) => {
  let mat = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    mat.push(row);
  }
  return mat;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const createMat = (n: number, m: number, a: number) => {
  let C = zeros(n, m);
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) C[i][j] = a;
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const randMat = (n: number, m: number) => {
  let C = zeros(n, m);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) C[i][j] = Math.random();
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const dot = (A: number[][], B: number[][]) => {
  let n = A.length;
  let m = A[0].length;
  let k = B[0].length;
  let q = B.length;
  console.assert(
    B.length == m,
    'the matrix dimension should be like this A n*m B m*k' +
      n +
      '*' +
      m +
      ' ' +
      q +
      '*' +
      k
  );
  let C = zeros(n, k);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let d = 0; d < k; d++) {
        C[i][d] += A[i][j] * B[j][d];
      }
    }
  }
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const add = (A: number[][], B: number[][]) => {
  let n = A.length;
  let m = A[0].length;
  console.assert(
    n == B.length && m == B[0].length,
    'matrix should be the same demension'
  );
  let C = zeros(n, m);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) C[i][j] = A[i][j] + B[i][j];
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const subtract = (A: number[][], B: number[][]) => {
  let n = A.length;
  let m = A[0].length;
  console.assert(
    n == B.length && m == B[0].length,
    'matrix should be the same demension'
  );
  let C = zeros(n, m);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) C[i][j] = A[i][j] - B[i][j];
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const transpose = (A: number[][]) => {
  let n = A.length;
  let m = A[0].length;
  let C = zeros(m, n);
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) C[j][i] = A[i][j];
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const multiply = (A: number[][], B: number[][]) => {
  let n = A.length;
  let m = A[0].length;
  console.assert(
    n == B.length && m == B[0].length,
    'matrix should be the same demension'
  );
  let C = zeros(n, m);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) C[i][j] = A[i][j] * B[i][j];
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const cMul = (k: number, A: number[][]) => {
  let n = A.length;
  let m = A[0].length;
  let C = zeros(n, m);
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) C[i][j] = A[i][j] * k;
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const mean = (A: number[][]) => {
  let n = A.length;
  let m = A[0].length;
  let ans = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) ans += A[i][j];
  return ans / (n * m);
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const functionMat = (A: number[][], fn: any) => {
  let n = A.length;
  let m = A[0].length;
  let C = zeros(n, m);
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) C[i][j] = fn(A[i][j]);
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const powMat = (A: number[][], k: number) => {
  let n = A.length;
  let m = A[0].length;
  let C = zeros(n, m);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) C[i][j] = Math.pow(A[i][j], k);
  return C;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const identityMat = (n: number) => {
  let A = zeros(n, n);
  for (let i = 0; i < n; i++) {
    A[i][i] = 1;
  }
  return A;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const pow = (A: number[][], k: number): any => {
  let n = A.length;
  let m = A[0].length;
  console.assert(n == m, 'matrix should be square!!');
  if (k == 0) return identityMat(n);
  let B = pow(A, Math.floor(k / 2));
  if (k % 2 == 0) return dot(B, B);
  else return dot(A, dot(B, B));
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const fact = (k: number) => {
  let m = 1;
  if (k == 0) return m;
  for (let i = 1; i < k; i++) {
    m *= i + 1;
  }
  return m;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

export const expm = (A: number[][]) => {
  const calSize = 20;
  let n = A.length;
  let m = A[0].length;
  console.assert(n == m, 'matrix should be square!!');
  let B = zeros(n, n);
  for (let i = 0; i < calSize; i++) {
    B = add(B, cMul(1 / fact(i), pow(A, i)));
  }
  return B;
};
////////////////////////////////////////////////////////////////////////////////////////////////////
// state space realization tahgog canonical control konande
export const ss = (numerator: number[], denominator: number[]): any => {
  let F = cMul(1 / denominator[0], [numerator]);
  let G = cMul(1 / denominator[0], [denominator]);
  console.log(F);
  let n = denominator.length;

  n = n - 1;
  let A = zeros(n, n);
  let B = zeros(n, 1);
  B[n - 1][0] = 1;
  let C = zeros(1, n);
  for (let i = 0; i + 1 < n; i++) {
    A[i][i + 1] = 1;
  }
  for (let i = 0; i < n; i++) {
    A[n - 1][i] = -G[0][n - 1 - i];
  }
  let m = F.length;
  for (let i = 0; i < m; i++) {
    C[0][i] = F[0][m - i - 1];
  }
  //for now we asume D = 0;
  let D = [[0]];
  let sys = {
    A: A,
    B: B,
    C: C,
    D: D,
  };
  return sys;
};
////////////////////////Integral///////////////

export const integral = (myfunc: any, a: number, b: number, dx: number) => {
  let I = 0;
  for (let x = a; x <= b; x += dx) {
    I += dx * myfunc(x);
  }
  return I;
};

//////////////////////////////////////////////

export const c2d = (sys: any, Ts: number): any => {
  let n = sys.A.length;
  let Ad = expm(cMul(Ts, sys.A));
  let Bd = zeros(n, 1);

  for (let i = 0; i < n; i++) {
    Bd[i][0] = integral(
      (x: number) => {
        let tmp = dot(expm(cMul(x, sys.A)), sys.B);
        return tmp[i];
      },
      0,
      Ts,
      Ts / 1000
    );
  }
  let sysd = { A: Ad, B: Bd, C: sys.C, D: sys.D };
  return sysd;
};
