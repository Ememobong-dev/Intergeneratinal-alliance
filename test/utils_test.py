import os, sys
import unittest

sys.path.insert(0, "..")

import app.utils as utils


class UtilsTestCase(unittest.TestCase):
    def test_load_config(self):
        file = "test_config.json"
        self.assertIsNotNone(utils.load_config(file=file))

    def test_encrypt_password(self):
        test_password = "f3f8e8eb48a22f8b"
        self.assertNotEqual(test_password, utils.encrypt_password(test_password))


if __name__ == "__main__":
    unittest.main()
