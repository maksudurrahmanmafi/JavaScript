#include <iostream>
using namespace std;

bool isLeap(int y) {
    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);
}

int daysInMonth(int m, int y) {
    if (m == 2) return isLeap(y) ? 29 : 28;
    if (m == 4 || m == 6 || m == 9 || m == 11) return 30;
    return 31;
}

void addDays(int &y, int &m, int &d, long long days) {
    while (days > 0) {
        int dim = daysInMonth(m, y);

        if (d + days <= dim) {
            d += days;
            return;
        } else {
            days -= (dim - d + 1);
            d = 1;
            m++;
            if (m > 12) {
                m = 1;
                y++;
            }
        }
    }
}

int main() {
    int N;
    cin >> N;

    long long jupiter_days = 4332LL * N;
    long long saturn_days  = 10759LL * N;

    int y1 = 2020, m1 = 12, d1 = 21;
    int y2 = 2020, m2 = 12, d2 = 21;

    addDays(y1, m1, d1, jupiter_days);
    addDays(y2, m2, d2, saturn_days);

    cout << "Dias terrestres para Jupiter = " << jupiter_days << endl;
    cout << "Data terrestre para Jupiter: " 
         << y1 << "-" << m1 << "-" << d1 << endl;

    cout << "Dias terrestres para Saturno = " << saturn_days << endl;
    cout << "Data terrestre para Saturno: " 
         << y2 << "-" << m2 << "-" << d2 << endl;

    return 0;
}