import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
        {id: 1, nickName: "admin", email: "admin@tms2.com", password: "admin", firstName: "admin", lastName: "tester", roles: [{id :1}], groups: [{id: 1}]},
        {id: 2, nickName: "manager", email: "manager@tms2.com", password: "manager", firstName: "manager", lastName: "tester", roles: [{id :2}], groups: [{id: 2}]},
        {id: 3, nickName: "reporter", email: "reporter@tms2.com", password: "reporter", firstName: "reporter", lastName: "tester", roles: [{id :3}], groups: []},
        {id: 4, nickName: "user", email: "user@tms2.com", password: "user", firstName: "user", lastName: "tester", roles: [{id :4}], groups: []},
        {id: 5, nickName: "mbalyi", email: "test@tms2.com", password: "test", lastName: "Balyi", firstName: "Mark", roles: [{id :1}], groups: [{id: 1},{id: 3}]},
        {id: 6, nickName: "tester1", email: "test@tms2.com", password: "test", lastName: "tester", firstName: "1", roles: [{id :4}], groups: []},
        {id: 7, nickName: "tester2", email: "test@tms2.com", password: "test", lastName: "tester", firstName: "2", roles: [{id :4}], groups: []},
        {id: 8, nickName: "tester3", email: "test@tms2.com", password: "test", lastName: "tester", firstName: "3", roles: [{id :4}], groups: []}
    ];

    let roles = [
        {id: 1, name: "administrator"},
        {id: 2, name: "manager"},
        {id: 3, name: "reporter"},
        {id: 4, name: "user"}
    ];

    let groups = [
        { id: 1, 'name': "admin", "isPrivate": true, 
            "creator": {id: 1, nickName: "admin", email: "admin@tms2.com", password: "admin", firstName: "admin", lastName: "tester"}, 
            "members": [
                {id: 1, nickName: "admin", email: "admin@tms2.com", password: "admin", firstName: "admin", lastName: "tester"},
                {id: 5, nickName: "mbalyi", email: "test@tms2.com", password: "test", lastName: "Balyi", firstName: "Mark"}
                ]
            },
        { id: 2, 'name': "manager", "isPrivate": true, 
            "creator": {id: 1, nickName: "admin", email: "admin@tms2.com", password: "admin", firstName: "admin", lastName: "tester"}, 
            "members": [
                {id: 2, nickName: "manager", email: "manager@tms2.com", password: "manager", firstName: "manager", lastName: "tester"}
                ]
        },
        { id: 3, 'name': "developer", "isPrivate": true, 
            "creator": {id: 1, nickName: "admin", email: "admin@tms2.com", password: "admin", firstName: "admin", lastName: "tester"}, 
            "members": [
                {id: 5}
                ]
        }
    ];

    let categories = [
        { id: 1, name: "Business Plan", parent: null, childrens: null, questions: [
            { id: 1, text: "...includes managers’ CVs.", answersAll: [{id: 1}, {id: 2}, {id: 3}], categories: null },
            { id: 2, text: "...reviews the competitors’ strengths and weaknesses.", answersAll: [{id: 4}, {id: 5}, {id: 6}], categories: null },
            { id: 3, text: "...gives details about the customers.", answersAll: [{id: 7}, {id: 8}, {id: 9}], categories: null },
            { id: 4, text: "...is an overview of what the business plan is about.", answersAll: [{id: 10}, {id: 11}, {id: 12}], categories: null },
            { id: 5, text: "...specifies the minimum level of sales required to achieve the break-even point.", answersAll: [{id: 13}, {id: 14}, {id: 15}], categories: null },
            { id: 6, text: "...describes sales, marketing and operational strategies.", answersAll: [{id: 16}, {id: 17}, {id: 18}], categories: null },
            { id: 7, text: "...includes the managers’ business record.", answersAll: [{id: 19}, {id: 20}, {id: 21}], categories: null },
            { id: 8, text: "...explains how the new product fills the market gap.", answersAll: [{id: 22}, {id: 23}, {id: 24}], categories: null },
            { id: 9, text: "...describes the ​conditions that make the ​business more ​successful than its competitors.", answersAll: [{id: 25}, {id: 26}, {id: 27}], categories: null },
            { id: 10, text: "...describes what pricing, distribution and promotional strategies you will use.", answersAll: [{id: 28}, {id: 29}, {id: 30}], categories: null }
        ], tests: [], users: [
            {id: 4, nickName: "user", email: "user@tms2.com", password: "user", firstName: "user", lastName: "tester", roles: [{id :4}], groups: []},
            {id: 5, nickName: "mbalyi", email: "test@tms2.com", password: "test", lastName: "Balyi", firstName: "Mark", roles: [{id :1}], groups: [{id: 1},{id: 3}]},
            {id: 6, nickName: "tester1", email: "test@tms2.com", password: "test", lastName: "tester", firstName: "1", roles: [{id :4}], groups: []},
            {id: 7, nickName: "tester2", email: "test@tms2.com", password: "test", lastName: "tester", firstName: "2", roles: [{id :4}], groups: []},
            {id: 8, nickName: "tester3", email: "test@tms2.com", password: "test", lastName: "tester", firstName: "3", roles: [{id :4}], groups: []}
        ] },
        { id: 2, name: "Market Competition", parent: null, childrens: null, questions: [
            { id: 11, text: "Oligopoly is...", answersAll: [{id: 31}, {id: 32}, {id: 33}], categories: null },
            { id: 12, text: "Monopoly is...", answersAll: [{id: 34}, {id: 35}, {id: 36}], categories: null },
            { id: 13, text: "Dominant firm oligopoly is...", answersAll: [{id: 37}, {id: 38}, {id: 39}], categories: null },
            { id: 14, text: "Natural monopoly is...", answersAll: [{id: 40}, {id: 41}, {id: 42}], categories: null },
            { id: 15, text: "Cartel is...", answersAll: [{id: 43}, {id: 44}, {id: 45}], categories: null },
            { id: 16, text: "What is market share means?", answersAll: [{id: 46}, {id: 47}, {id: 48}], categories: null },
            { id: 17, text: "Unique selling proposition/point is...", answersAll: [{id: 49}, {id: 50}, {id: 51}], categories: null },
            { id: 18, text: "Niche is...", answersAll: [{id: 52}, {id: 53}, {id: 54}], categories: null },
            { id: 19, text: "Market segmentation is...", answersAll: [{id: 55}, {id: 56}, {id: 57}], categories: null },
            { id: 20, text: "To protect a market share a company...", answersAll: [{id: 58}, {id: 59}, {id: 60}], categories: null }
        ], tests: [], users: [
            {id: 5, nickName: "mbalyi", email: "test@tms2.com", password: "test", lastName: "Balyi", firstName: "Mark", roles: [{id :1}], groups: [{id: 1},{id: 3}]},
            {id: 6, nickName: "tester1", email: "test@tms2.com", password: "test", lastName: "tester", firstName: "1", roles: [{id :4}], groups: []},
            {id: 8, nickName: "tester3", email: "test@tms2.com", password: "test", lastName: "tester", firstName: "3", roles: [{id :4}], groups: []}
        ] }
    ];

    let questions = [
        { id: 1, text: "...includes managers’ CVs.", answersAll: [
            { id: 1, text: "Appendix or Appendices", correct: true },
            { id: 2, text: "Executive summary", correct: false },
            { id: 3, text: "Financial analysis", correct: false }
        ], categories: 1 },
        { id: 2, text: "...reviews the competitors’ strengths and weaknesses.", answersAll: [
            { id: 4, text: "Competition", correct: true },
            { id: 5, text: "Financial analysis", correct: false },
            { id: 6, text: "Market opportunity", correct: false }
        ], categories: 1 },
        { id: 3, text: "...gives details about the customers.", answersAll: [
            { id: 7, text: "Customer profile", correct: true },
            { id: 8, text: "Appendix or Appendices", correct: false },
            { id: 9, text: "Product or service", correct: false }
        ], categories: 1 },
        { id: 4, text: "...is an overview of what the business plan is about.", answersAll: [
            { id: 10, text: "Executive summary", correct: true },
            { id: 11, text: "Management Team", correct: false },
            { id: 12, text: "Market opportunity", correct: false }
        ], categories: 1 },
        { id: 5, text: "...specifies the minimum level of sales required to achieve the break-even point.", answersAll: [
            { id: 13, text: "Financial analysis", correct: true },
            { id: 14, text: "Implementation plan", correct: false },
            { id: 15, text: "Appendix or Appendices", correct: false }
        ], categories: 1 },
        { id: 6, text: "...describes sales, marketing and operational strategies.", answersAll: [
            { id: 16, text: "Implementation plan", correct: true },
            { id: 17, text: "Competition", correct: false },
            { id: 18, text: "Competitive advantage", correct: false }
        ], categories: 1 },
        { id: 7, text: "...includes the managers’ business record.", answersAll: [
            { id: 19, text: "Management Team", correct: true },
            { id: 20, text: "Competitive advantage", correct: false },
            { id: 21, text: "Customer profil", correct: false }
        ], categories: 1 },
        { id: 8, text: "...explains how the new product fills the market gap.", answersAll: [
            { id: 22, text: "Market opportunity", correct: true },
            { id: 23, text: "Executive summary", correct: false },
            { id: 24, text: "Implementation plan", correct: false }
        ], categories: 1 },
        { id: 9, text: "...describes the ​conditions that make the ​business more ​successful than its competitors.", answersAll: [
            { id: 25, text: "Competitive advantage", correct: true },
            { id: 26, text: "Management Team", correct: false },
            { id: 27, text: "Appendix or Appendices", correct: false }
        ], categories: 1 },
        { id: 10, text: "...describes what pricing, distribution and promotional strategies you will use.", answersAll: [
            { id: 28, text: "Implementation plan", correct: true },
            { id: 29, text: "Product or service", correct: false },
            { id: 30, text: "Management Team", correct: false }
        ], categories: 1 },

        { id: 11, text: "Oligopoly is...", answersAll: [
            { id: 31, text: "a market dominated by a few large suppliers.", correct: true },
            { id: 32, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false },
            { id: 33, text: "a monopoly in a market in which it would not be practical to have competition.", correct: false }
        ], categories: 2 },
        { id: 12, text: "Monopoly is...", answersAll: [
            { id: 34, text: "the situation when there is only one seller of a product or service.", correct: true },
            { id: 35, text: "a market dominated by a few large suppliers.", correct: false },
            { id: 36, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false }
        ], categories: 2 },
        { id: 13, text: "Dominant firm oligopoly is...", answersAll: [
            { id: 37, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: true },
            { id: 38, text: "the situation when there is only one seller of a product or service.", correct: false },
            { id: 39, text: "a market dominated by a few large suppliers.", correct: false }
        ], categories: 2 },
        { id: 14, text: "Natural monopoly is...", answersAll: [
            { id: 40, text: "a monopoly in a market in which it would not be practical to have competition.", correct: true },
            { id: 41, text: "the situation when there is only one seller of a product or service.", correct: false },
            { id: 42, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false }
        ], categories: 2 },
        { id: 15, text: "Cartel is...", answersAll: [
            { id: 43, text: "a group of producers or sellers who fix prices and quantities in order to avoid competition and increase profit.", correct: true },
            { id: 44, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: false },
            { id: 45, text: "the dividing of all possible customers into groups based on their needs, age, education, income, etc.", correct: false }
        ], categories: 2 },
        { id: 16, text: "What is market share means?", answersAll: [
            { id: 46, text: "The sales of a company expressed as a percentage of total sales in a given market.", correct: true },
            { id: 47, text: "A small company in the market that presents no threat to the market leader.", correct: false },
            { id: 48, text: "In this way they can save on the manufacturing costs.", correct: false }
        ], categories: 2 },
        { id: 17, text: "Unique selling proposition/point is...", answersAll: [
            { id: 49, text: "a feature of a product that makes it different from and better than all its competitors' products.", correct: true },
            { id: 50, text: "focusing on specialised narrow segments of the market.", correct: false },
            { id: 51, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: false }
        ], categories: 2 },
        { id: 18, text: "Niche is...", answersAll: [
            { id: 52, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: true },
            { id: 53, text: "usually the favourite target of market challengers.", correct: false },
            { id: 54, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false }
        ], categories: 2 },
        { id: 19, text: "Market segmentation is...", answersAll: [
            { id: 55, text: "the dividing of all possible customers into groups based on their needs, age, education, income, etc.", correct: true },
            { id: 56, text: "small specialised companies which target segments within segments.", correct: false },
            { id: 57, text: "a group of producers or sellers who fix prices and quantities in order to avoid competition and increase profit.", correct: false }
        ], categories: 2 },
        { id: 20, text: "To protect a market share a company...", answersAll: [
            { id: 58, text: "can extend its product lines to leave less room for competitors.", correct: true },
            { id: 59, text: "can focus on specialised narrow segments of the market.", correct: false },
            { id: 60, text: "always can beat their competitors rather than buying them.", correct: false }
        ], categories: 2 }
    ];

    let answers = [
        { id: 1, text: "Appendix or Appendices", correct: true },
        { id: 2, text: "Executive summary", correct: false },
        { id: 3, text: "Financial analysis", correct: false },

        { id: 4, text: "Competition", correct: true },
        { id: 5, text: "Financial analysis", correct: false },
        { id: 6, text: "Market opportunity", correct: false },

        { id: 7, text: "Customer profile", correct: true },
        { id: 8, text: "Appendix or Appendices", correct: false },
        { id: 9, text: "Product or service", correct: false },

        { id: 10, text: "Executive summary", correct: true },
        { id: 11, text: "Management Team", correct: false },
        { id: 12, text: "Market opportunity", correct: false },

        { id: 13, text: "Financial analysis", correct: true },
        { id: 14, text: "Implementation plan", correct: false },
        { id: 15, text: "Appendix or Appendices", correct: false },

        { id: 16, text: "Implementation plan", correct: true },
        { id: 17, text: "Competition", correct: false },
        { id: 18, text: "Competitive advantage", correct: false },

        { id: 19, text: "Management Team", correct: true },
        { id: 20, text: "Competitive advantage", correct: false },
        { id: 21, text: "Customer profil", correct: false },

        { id: 22, text: "Market opportunity", correct: true },
        { id: 23, text: "Executive summary", correct: false },
        { id: 24, text: "Implementation plan", correct: false },

        { id: 25, text: "Competitive advantage", correct: true },
        { id: 26, text: "Management Team", correct: false },
        { id: 27, text: "Appendix or Appendices", correct: false },

        { id: 28, text: "Implementation plan", correct: true },
        { id: 29, text: "Product or service", correct: false },
        { id: 30, text: "Management Team", correct: false },

        { id: 31, text: "a market dominated by a few large suppliers.", correct: true },
        { id: 32, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false },
        { id: 33, text: "a monopoly in a market in which it would not be practical to have competition.", correct: false },

        { id: 34, text: "the situation when there is only one seller of a product or service.", correct: true },
        { id: 35, text: "a market dominated by a few large suppliers.", correct: false },
        { id: 36, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false },

        { id: 37, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: true },
        { id: 38, text: "the situation when there is only one seller of a product or service.", correct: false },
        { id: 39, text: "a market dominated by a few large suppliers.", correct: false },

        { id: 40, text: "a monopoly in a market in which it would not be practical to have competition.", correct: true },
        { id: 41, text: "the situation when there is only one seller of a product or service.", correct: false },
        { id: 42, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false },

        { id: 43, text: "a group of producers or sellers who fix prices and quantities in order to avoid competition and increase profit.", correct: true },
        { id: 44, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: false },
        { id: 45, text: "the dividing of all possible customers into groups based on their needs, age, education, income, etc.", correct: false },

        { id: 46, text: "The sales of a company expressed as a percentage of total sales in a given market.", correct: true },
        { id: 47, text: "A small company in the market that presents no threat to the market leader.", correct: false },
        { id: 48, text: "In this way they can save on the manufacturing costs.", correct: false },

        { id: 49, text: "a feature of a product that makes it different from and better than all its competitors' products.", correct: true },
        { id: 50, text: "focusing on specialised narrow segments of the market.", correct: false },
        { id: 51, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: false },

        { id: 52, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: true },
        { id: 53, text: "usually the favourite target of market challengers.", correct: false },
        { id: 54, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false },

        { id: 55, text: "the dividing of all possible customers into groups based on their needs, age, education, income, etc.", correct: true },
        { id: 56, text: "small specialised companies which target segments within segments.", correct: false },
        { id: 57, text: "a group of producers or sellers who fix prices and quantities in order to avoid competition and increase profit.", correct: false },

        { id: 58, text: "can extend its product lines to leave less room for competitors.", correct: true },
        { id: 59, text: "can focus on specialised narrow segments of the market.", correct: false },
        { id: 60, text: "always can beat their competitors rather than buying them.", correct: false }
    ];

    let tests = [
        { id: 1, text: "Business Plan First Exam", questions: [
            { id: 1, text: "...includes managers’ CVs.", answersAll: [
                { id: 1, text: "Appendix or Appendices", correct: true },
                { id: 2, text: "Executive summary", correct: false },
                { id: 3, text: "Financial analysis", correct: false }
            ], categories: 1 },
            { id: 2, text: "...reviews the competitors’ strengths and weaknesses.", answersAll: [
                { id: 4, text: "Competition", correct: true },
                { id: 5, text: "Financial analysis", correct: false },
                { id: 6, text: "Market opportunity", correct: false }
            ], categories: 1 },
            { id: 3, text: "...gives details about the customers.", answersAll: [
                { id: 7, text: "Customer profile", correct: true },
                { id: 8, text: "Appendix or Appendices", correct: false },
                { id: 9, text: "Product or service", correct: false }
            ], categories: 1 },
            { id: 4, text: "...is an overview of what the business plan is about.", answersAll: [
                { id: 10, text: "Executive summary", correct: true },
                { id: 11, text: "Management Team", correct: false },
                { id: 12, text: "Market opportunity", correct: false }
            ], categories: 1 },
            { id: 5, text: "...specifies the minimum level of sales required to achieve the break-even point.", answersAll: [
                { id: 13, text: "Financial analysis", correct: true },
                { id: 14, text: "Implementation plan", correct: false },
                { id: 15, text: "Appendix or Appendices", correct: false }
            ], categories: 1 },
            { id: 6, text: "...describes sales, marketing and operational strategies.", answersAll: [
                { id: 16, text: "Implementation plan", correct: true },
                { id: 17, text: "Competition", correct: false },
                { id: 18, text: "Competitive advantage", correct: false }
            ], categories: 1 },
            { id: 7, text: "...includes the managers’ business record.", answersAll: [
                { id: 19, text: "Management Team", correct: true },
                { id: 20, text: "Competitive advantage", correct: false },
                { id: 21, text: "Customer profil", correct: false }
            ], categories: 1 },
            { id: 8, text: "...explains how the new product fills the market gap.", answersAll: [
                { id: 22, text: "Market opportunity", correct: true },
                { id: 23, text: "Executive summary", correct: false },
                { id: 24, text: "Implementation plan", correct: false }
            ], categories: 1 },
            { id: 9, text: "...describes the ​conditions that make the ​business more ​successful than its competitors.", answersAll: [
                { id: 25, text: "Competitive advantage", correct: true },
                { id: 26, text: "Management Team", correct: false },
                { id: 27, text: "Appendix or Appendices", correct: false }
            ], categories: 1 },
            { id: 10, text: "...describes what pricing, distribution and promotional strategies you will use.", answersAll: [
                { id: 28, text: "Implementation plan", correct: true },
                    { id: 29, text: "Product or service", correct: false },
                    { id: 30, text: "Management Team", correct: false }
                ], categories: 1 }
        ], owner: {id: 5, nickName: "mbalyi", email: "test@tms2.com", password: "test", lastName: "Balyi", firstName: "Mark", roles: [{id :1}], groups: [{id: 1},{id: 3}]}, 
        category: 1, testSets: [{id: 1, dueDate: new Date()}], createdAt:  new Date("January 01, 2017 11:00:00"), description: "First exam." },
        { id: 2, text: "Business Plan Second Exam", questions: [
                { id: 1, text: "...includes managers’ CVs.", answersAll: [
                { id: 1, text: "Appendix or Appendices", correct: true },
                { id: 2, text: "Executive summary", correct: false },
                { id: 3, text: "Financial analysis", correct: false }
            ], categories: 1 },
            { id: 3, text: "...gives details about the customers.", answersAll: [
                { id: 7, text: "Customer profile", correct: true },
                { id: 8, text: "Appendix or Appendices", correct: false },
                { id: 9, text: "Product or service", correct: false }
            ], categories: 1 },
            { id: 4, text: "...is an overview of what the business plan is about.", answersAll: [
                { id: 10, text: "Executive summary", correct: true },
                { id: 11, text: "Management Team", correct: false },
                { id: 12, text: "Market opportunity", correct: false }
            ], categories: 1 },
            { id: 6, text: "...describes sales, marketing and operational strategies.", answersAll: [
                { id: 16, text: "Implementation plan", correct: true },
                { id: 17, text: "Competition", correct: false },
                { id: 18, text: "Competitive advantage", correct: false }
            ], categories: 1 },
            { id: 7, text: "...includes the managers’ business record.", answersAll: [
                { id: 19, text: "Management Team", correct: true },
                { id: 20, text: "Competitive advantage", correct: false },
                { id: 21, text: "Customer profil", correct: false }
            ], categories: 1 },
            { id: 10, text: "...describes what pricing, distribution and promotional strategies you will use.", answersAll: [
                { id: 28, text: "Implementation plan", correct: true },
                { id: 29, text: "Product or service", correct: false },
                { id: 30, text: "Management Team", correct: false }
            ], categories: 1 }
        ], owner: {id: 5, nickName: "mbalyi", email: "test@tms2.com", password: "test", lastName: "Balyi", firstName: "Mark", roles: [{id :1}], groups: [{id: 1},{id: 3}]}, 
        category: 1, testSets: [{id: 2, dueDate: new Date("May 01, 2017 11:13:00")}], createdAt:  new Date("January 01, 2017 11:00:00"), description: "Second exam." },
        { id: 3, text: "Market Competition Test", questions: [
            { id: 11, text: "Oligopoly is...", answersAll: [
                { id: 31, text: "a market dominated by a few large suppliers.", correct: true },
                { id: 32, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false },
                { id: 33, text: "a monopoly in a market in which it would not be practical to have competition.", correct: false }
            ], categories: 2 },
            { id: 12, text: "Monopoly is...", answersAll: [
                { id: 34, text: "the situation when there is only one seller of a product or service.", correct: true },
                { id: 35, text: "a market dominated by a few large suppliers.", correct: false },
                { id: 36, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false }
            ], categories: 2 },
            { id: 13, text: "Dominant firm oligopoly is...", answersAll: [
                { id: 37, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: true },
                { id: 38, text: "the situation when there is only one seller of a product or service.", correct: false },
                { id: 39, text: "a market dominated by a few large suppliers.", correct: false }
            ], categories: 2 },
            { id: 14, text: "Natural monopoly is...", answersAll: [
                { id: 40, text: "a monopoly in a market in which it would not be practical to have competition.", correct: true },
                { id: 41, text: "the situation when there is only one seller of a product or service.", correct: false },
                { id: 42, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false }
            ], categories: 2 },
            { id: 15, text: "Cartel is...", answersAll: [
                { id: 43, text: "a group of producers or sellers who fix prices and quantities in order to avoid competition and increase profit.", correct: true },
                { id: 44, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: false },
                { id: 45, text: "the dividing of all possible customers into groups based on their needs, age, education, income, etc.", correct: false }
            ], categories: 2 },
            { id: 16, text: "What is market share means?", answersAll: [
                { id: 46, text: "The sales of a company expressed as a percentage of total sales in a given market.", correct: true },
                { id: 47, text: "A small company in the market that presents no threat to the market leader.", correct: false },
                { id: 48, text: "In this way they can save on the manufacturing costs.", correct: false }
            ], categories: 2 },
            { id: 17, text: "Unique selling proposition/point is...", answersAll: [
                { id: 49, text: "a feature of a product that makes it different from and better than all its competitors' products.", correct: true },
                { id: 50, text: "focusing on specialised narrow segments of the market.", correct: false },
                { id: 51, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: false }
            ], categories: 2 },
            { id: 18, text: "Niche is...", answersAll: [
                { id: 52, text: "an opportunity for a business to offer a product or service that is not offered by other businesses.", correct: true },
                { id: 53, text: "usually the favourite target of market challengers.", correct: false },
                { id: 54, text: "a situation in which the market leader can determine the price that its competitors can charge.", correct: false }
            ], categories: 2 },
            { id: 19, text: "Market segmentation is...", answersAll: [
                { id: 55, text: "the dividing of all possible customers into groups based on their needs, age, education, income, etc.", correct: true },
                { id: 56, text: "small specialised companies which target segments within segments.", correct: false },
                { id: 57, text: "a group of producers or sellers who fix prices and quantities in order to avoid competition and increase profit.", correct: false }
            ], categories: 2 },
            { id: 20, text: "To protect a market share a company...", answersAll: [
                { id: 58, text: "can extend its product lines to leave less room for competitors.", correct: true },
                { id: 59, text: "can focus on specialised narrow segments of the market.", correct: false },
                { id: 60, text: "always can beat their competitors rather than buying them.", correct: false }
            ], categories: 2 }
        ], owner: {id: 2, nickName: "manager", email: "manager@tms2.com", password: "manager", firstName: "manager", lastName: "tester", roles: [{id :2}], groups: [{id: 2}]}, 
        category: 2, testSets: [{id: 3, dueDate: new Date()}], createdAt:  new Date("January 01, 2017 11:00:00"), description: ""}
    ];

    let testSets = [
        {id: 1, dueDate: new Date()},
        {id: 2, dueDate: new Date("May 01, 2017 11:13:00")},
        {id: 3, dueDate: new Date()}
    ];

    let executions = [
        {id: 1, test: 1, user: 4, name: "Business Plan", answersGiven: [], dueDate: new Date(), dateOfStart: null, dateOfFill: null},
        {id: 2, test: 1, user: 5, name: "Business Plan", answersGiven: [], dueDate: new Date(), dateOfStart: null, dateOfFill: null},
        {id: 3, test: 1, user: 6, name: "Business Plan", answersGiven: [], dueDate: new Date(), dateOfStart: null, dateOfFill: null},
        {id: 4, test: 1, user: 7, name: "Business Plan", answersGiven: [], dueDate: new Date(), dateOfStart: null, dateOfFill: null},
        {id: 5, test: 1, user: 8, name: "Business Plan", answersGiven: [], dueDate: new Date(), dateOfStart: null, dateOfFill: null},

        {id: 6, test: 2, user: 4, name: "Business Plan Second Exam", answersGiven: [], dueDate: new Date("May 01, 2017 11:13:00"), dateOfStart: null, dateOfFill: null},
        {id: 7, test: 2, user: 5, name: "Business Plan Second Exam", answersGiven: [], dueDate: new Date("May 01, 2017 11:13:00"), dateOfStart: null, dateOfFill: null},
        {id: 8, test: 2, user: 6, name: "Business Plan Second Exam", answersGiven: [], dueDate: new Date("May 01, 2017 11:13:00"), dateOfStart: null, dateOfFill: null},
        {id: 9, test: 2, user: 7, name: "Business Plan Second Exam", answersGiven: [], dueDate: new Date("May 01, 2017 11:13:00"), dateOfStart: null, dateOfFill: null},
        {id: 10, test: 2, user: 8, name: "Business Plan Second Exam", answersGiven: [], dueDate: new Date("May 01, 2017 11:13:00"), dateOfStart: null, dateOfFill: null},

        {id: 11, test: 3, user: 5, name: "Market Competition Test", answersGiven: [], dueDate: new Date(), dateOfStart: null, dateOfFill: null},
        {id: 12, test: 3, user: 6, name: "Market Competition Test", answersGiven: [], dueDate: new Date(), dateOfStart: null, dateOfFill: null},
        {id: 13, test: 3, user: 8, name: "Market Competition Test", answersGiven: [], dueDate: new Date(), dateOfStart: null, dateOfFill: null}
    ];

    return { 
        users: users, roles: roles, groups: groups, 
        categories: categories, questions: questions, answers: answers, 
        tests: tests, testSets: testSets, executions: executions
    };
  }
}