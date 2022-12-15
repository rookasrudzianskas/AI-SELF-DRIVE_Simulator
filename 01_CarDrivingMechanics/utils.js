function lerp(A, B, t) {
    // the value of a, difference between b and a, divided by the difference of t.
    return A + (B - A) * t;
}
